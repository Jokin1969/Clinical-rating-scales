/**
 * app.js — Main application logic
 */

const App = (() => {
  let state = {
    lang: 'es',
    patientCode: '',
    currentScale: null,
    currentIndex: 0,
    answers: {},
  };

  // ── DOM refs ──────────────────────────────────────────────
  const views = {
    home:          document.getElementById('view-home'),
    questionnaire: document.getElementById('view-questionnaire'),
    results:       document.getElementById('view-results'),
  };

  // ── View switching ────────────────────────────────────────
  function showView(name) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[name].classList.add('active');
  }

  // ── Language ──────────────────────────────────────────────
  function applyLang(lang) {
    state.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'), lang);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    updateScaleButtons();
  }

  // ── Scale buttons ─────────────────────────────────────────
  function updateScaleButtons() {
    // The code is only "active" if the input field still matches the loaded code.
    const inputVal = (document.getElementById('patient-code').value || '').trim();
    const codeActive = !!state.patientCode && inputVal === state.patientCode;

    document.querySelectorAll('.scale-btn').forEach(btn => {
      const id = btn.dataset.scale;
      btn.querySelector('.scale-name').textContent  = t('scaleName_' + id, state.lang);
      btn.querySelector('.scale-questions').textContent = t('questions_' + id, state.lang);

      btn.classList.toggle('disabled', !codeActive);
      btn.disabled = !codeActive;

      // Completion / progress indicators
      const saved = codeActive && state.savedProgress && state.savedProgress[id];
      const answers = saved && saved.answers ? saved.answers : {};
      const answeredCount = Object.keys(answers).length;
      const scale = SCALES[id];
      const total = scale ? scale.questions.length : 0;
      const completed = total > 0 && answeredCount >= total;

      btn.classList.toggle('completed', completed);
      btn.classList.toggle('has-progress', answeredCount > 0 && answeredCount < total);

      // Score (only when completed)
      const scoreEl = btn.querySelector('.scale-score');
      if (scoreEl) {
        if (completed) {
          let score = 0;
          scale.questions.forEach((q, i) => {
            if (answers[i] !== undefined) score += q.options[answers[i]].value;
          });
          scoreEl.textContent = t('score', state.lang) + ': ' + score;
        } else {
          scoreEl.textContent = '';
        }
      }
    });
  }

  // ── Patient code ──────────────────────────────────────────
  async function loadPatientCode(code) {
    if (!code) return;
    state.patientCode = code;
    const status = document.getElementById('code-status');
    try {
      const res = await fetch('/api/progress/' + encodeURIComponent(code));
      const data = await res.json();
      state.savedProgress = data;
      status.textContent = Object.keys(data).length
        ? t('codeLoaded', state.lang)
        : t('codeNew', state.lang);
    } catch {
      state.savedProgress = {};
      status.textContent = t('codeNew', state.lang);
    }
    updateScaleButtons();
  }

  // ── Start scale ───────────────────────────────────────────
  function startScale(scaleId) {
    const scale = SCALES[scaleId];
    if (!scale) return;
    state.currentScale = scaleId;
    state.currentIndex = 0;
    state.answers = {};

    // restore saved answers if any
    const saved = state.savedProgress && state.savedProgress[scaleId];
    if (saved && saved.answers) state.answers = { ...saved.answers };

    document.getElementById('scale-label').textContent = scaleId;
    document.getElementById('questionnaire-patient-code').textContent = state.patientCode;
    showView('questionnaire');
    renderQuestion();
  }

  // ── Render question ───────────────────────────────────────
  function renderQuestion() {
    const scale = SCALES[state.currentScale];
    const q     = scale.questions[state.currentIndex];
    const total = scale.questions.length;
    const idx   = state.currentIndex;
    const lang  = state.lang;

    document.getElementById('question-counter').textContent =
      t('questionOf', lang, { current: idx + 1, total });
    document.getElementById('question-text').textContent =
      q.text[lang] || q.text['es'];

    const bar = document.getElementById('progress-bar');
    bar.style.width = ((idx + 1) / total * 100) + '%';

    const list = document.getElementById('responses-list');
    list.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'response-btn';
      if (state.answers[idx] === i) btn.classList.add('selected');
      btn.textContent = (opt.label[lang] || opt.label['es']);
      btn.addEventListener('click', () => selectAnswer(idx, i));
      list.appendChild(btn);
    });

    updateNavButtons();
    updateFinishButton();
  }

  function selectAnswer(qIdx, optIdx) {
    state.answers[qIdx] = optIdx;
    renderQuestion();
    saveProgress();
  }

  function updateNavButtons() {
    const total   = SCALES[state.currentScale].questions.length;
    const isFirst = state.currentIndex === 0;
    const isLast  = state.currentIndex === total - 1;
    const btnPrev = document.getElementById('btn-prev');
    btnPrev.style.display  = isFirst ? 'none' : '';
    document.getElementById('btn-next').disabled  = isLast;
    document.getElementById('btn-first').disabled = isFirst;
    document.getElementById('btn-last').disabled  = isLast;
  }

  function updateFinishButton() {
    const total    = SCALES[state.currentScale].questions.length;
    const answered = Object.keys(state.answers).length;
    const allDone  = answered >= total;
    const btn      = document.getElementById('btn-finish');
    btn.classList.toggle('disabled', !allDone);
    btn.disabled = !allDone;
    document.getElementById('btn-next').style.display = allDone ? 'none' : '';
  }

  // ── Navigation ────────────────────────────────────────────
  function goTo(idx) {
    const total = SCALES[state.currentScale].questions.length;
    state.currentIndex = Math.max(0, Math.min(total - 1, idx));
    renderQuestion();
  }

  // ── Save progress ─────────────────────────────────────────
  async function saveProgress() {
    if (!state.patientCode || !state.currentScale) return;
    // Keep in-memory savedProgress up to date so returning to menu
    // without re-entering the code still restores answers correctly.
    if (!state.savedProgress) state.savedProgress = {};
    state.savedProgress[state.currentScale] = { answers: { ...state.answers } };
    updateScaleButtons();
    try {
      await fetch('/api/progress/' + encodeURIComponent(state.patientCode), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scaleId: state.currentScale, answers: state.answers }),
      });
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  // ── Finish ────────────────────────────────────────────────
  function finishScale() {
    const scale = SCALES[state.currentScale];
    let score = 0;
    scale.questions.forEach((q, i) => {
      if (state.answers[i] !== undefined) {
        score += q.options[state.answers[i]].value;
      }
    });

    document.getElementById('results-patient-code').textContent = state.patientCode;
    document.getElementById('results-scale-name').textContent =
      t('scaleName_' + state.currentScale, state.lang);
    document.getElementById('results-score').textContent = score;
    showView('results');
  }

  // ── Help modal ────────────────────────────────────────────
  function showHelp() {
    const scale = SCALES[state.currentScale];
    const q     = scale.questions[state.currentIndex];
    const help  = q.help && (q.help[state.lang] || q.help['es']);
    document.getElementById('modal-help-content').textContent =
      help || '—';
    document.getElementById('modal-help').classList.remove('hidden');
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    // Load patient code
    document.getElementById('btn-load-code').addEventListener('click', () => {
      loadPatientCode(document.getElementById('patient-code').value.trim());
    });
    document.getElementById('patient-code').addEventListener('keydown', e => {
      if (e.key === 'Enter') loadPatientCode(e.target.value.trim());
    });
    // Reactively lock/unlock buttons as the user edits the code field
    document.getElementById('patient-code').addEventListener('input', updateScaleButtons);

    // Scale buttons
    document.querySelectorAll('.scale-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn.disabled) startScale(btn.dataset.scale);
      });
    });

    // Navigation
    document.getElementById('btn-prev').addEventListener('click',  () => goTo(state.currentIndex - 1));
    document.getElementById('btn-next').addEventListener('click',  () => goTo(state.currentIndex + 1));
    document.getElementById('btn-first').addEventListener('click', () => goTo(0));
    document.getElementById('btn-last').addEventListener('click',  () => {
      goTo(SCALES[state.currentScale].questions.length - 1);
    });

    // Finish
    document.getElementById('btn-finish').addEventListener('click', () => {
      if (!document.getElementById('btn-finish').disabled) finishScale();
    });

    // Back to menu (results view and questionnaire view)
    const backToHome = () => {
      document.getElementById('patient-code').value = state.patientCode;
      showView('home');
    };
    document.getElementById('btn-back-menu').addEventListener('click', backToHome);
    document.getElementById('btn-back-to-menu').addEventListener('click', backToHome);

    // Help
    document.getElementById('btn-help').addEventListener('click', showHelp);
    document.getElementById('btn-close-modal').addEventListener('click', () => {
      document.getElementById('modal-help').classList.add('hidden');
    });
    document.getElementById('modal-help').addEventListener('click', e => {
      if (e.target === e.currentTarget)
        document.getElementById('modal-help').classList.add('hidden');
    });

    applyLang('es');
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
