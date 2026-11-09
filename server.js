const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
// DATA_DIR can point to a persistent volume (e.g. Railway volume mounted at /data)
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'progress.json');
const RESULTS_FILE = path.join(DATA_DIR, 'mrc-results.json');

app.use(express.json({ limit: '10mb' }));

// Portal routes — must be before express.static
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'portal.html')));
app.get('/historia-natural', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/cuidadores', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cuidadores.html')));
app.get('/clinicos', (req, res) => res.sendFile(path.join(__dirname, 'public', 'portal.html')));
app.get('/registros-mrc', (req, res) => res.sendFile(path.join(__dirname, 'public', 'registros.html')));

app.use(express.static(path.join(__dirname, 'public')));

// POST /api/send-report-email — used by cuidadores.html
// Required env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Optional:          SMTP_SECURE (true/false), SMTP_FROM
app.post('/api/send-report-email', async (req, res) => {
  const { html, pdfBase64, filename, patientInitials, scaleName } = req.body;
  if (!html || !pdfBase64) {
    return res.status(400).json({ error: 'Missing html or pdfBase64' });
  }

  let nodemailer;
  try {
    nodemailer = require('nodemailer');
  } catch {
    return res.status(500).json({ error: 'nodemailer not installed — run: npm install nodemailer' });
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
    port:   parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fullHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
  body{font-family:'Segoe UI',system-ui,sans-serif;color:#1e293b;max-width:800px;margin:0 auto;padding:2rem}
  .rp-doc-header{margin-bottom:2rem;border-bottom:2px solid #1a6bb5;padding-bottom:1rem}
  .rp-app-label{color:#6b7280;font-size:.85rem;margin-bottom:.25rem}
  .rp-doc-title{font-size:1.4rem;font-weight:700;color:#1e3a5c;margin-bottom:.75rem}
  .rp-meta-row{display:flex;gap:1rem;margin:.15rem 0}
  .rp-meta-k{font-weight:600;color:#374151;min-width:140px}
  .rp-scale-block{margin-bottom:2rem}
  .rp-scale-id-bar{background:#1a6bb5;color:#fff;padding:.5rem 1rem;border-radius:6px;display:flex;align-items:baseline;gap:.75rem;margin-bottom:1rem}
  .rp-scale-id{font-weight:700;font-size:1.1rem}
  .rp-qa-list{list-style:none;padding:0;margin:0}
  .rp-qa{display:flex;gap:.75rem;padding:.65rem 0;border-bottom:1px solid #e2e8f0}
  .rp-qa-num{font-weight:700;color:#94a3b8;min-width:1.5rem;padding-top:.1rem}
  .rp-q{font-weight:500;margin:0 0 .2rem}
  .rp-a{margin:0;color:#374151}
  .rp-a--ok{color:#16a34a}
  .rp-score-footer{display:flex;justify-content:flex-end;align-items:center;gap:1rem;margin-top:1rem;background:#f1f5f9;padding:.65rem 1rem;border-radius:6px}
  .rp-score-lbl{font-weight:600;color:#475569}
  .rp-score-num{font-size:1.5rem;font-weight:700;color:#1a6bb5}
</style></head><body>${html}</body></html>`;

  try {
    await transporter.sendMail({
      from:    process.env.SMTP_FROM || process.env.SMTP_USER,
      to:      process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Informe ${scaleName || 'MRC'} \u2014 Iniciales: ${patientInitials || '\u2014'}`,
      html:    fullHtml,
      attachments: [{
        filename:    filename || 'informe.pdf',
        content:     Buffer.from(pdfBase64, 'base64'),
        contentType: 'application/pdf',
      }],
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: err.message });
  }
});

function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Error loading data:', e);
  }
  return {};
}

function saveData(data) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error saving data:', e);
  }
}

// GET progress for a patient code
app.get('/api/progress/:code', (req, res) => {
  const code = req.params.code.trim();
  const data = loadData();
  res.json(data[code] || {});
});

// POST save progress for a patient code
app.post('/api/progress/:code', (req, res) => {
  const code = req.params.code.trim();
  const { scaleId, answers } = req.body;
  if (!code || !scaleId || !answers) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const data = loadData();
  if (!data[code]) data[code] = {};
  data[code][scaleId] = { answers, updatedAt: new Date().toISOString() };
  saveData(data);
  res.json({ ok: true });
});

// DELETE progress for a specific scale and patient
app.delete('/api/progress/:code/:scaleId', (req, res) => {
  const { code, scaleId } = req.params;
  const data = loadData();
  if (data[code] && data[code][scaleId]) {
    delete data[code][scaleId];
    saveData(data);
  }
  res.json({ ok: true });
});

// ===== MRC results repository =====
// Optional env var REPO_PASSWORD: if set, reading results requires header x-repo-key.
function loadResults() {
  try {
    if (fs.existsSync(RESULTS_FILE)) return JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf8'));
  } catch (e) {
    console.error('Error loading results:', e);
  }
  return [];
}

function saveResults(list) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = RESULTS_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2));
  fs.renameSync(tmp, RESULTS_FILE);
}

function requireRepoKey(req, res, next) {
  const pwd = process.env.REPO_PASSWORD;
  if (!pwd) return next();
  if (req.get('x-repo-key') === pwd) return next();
  return res.status(401).json({ error: 'unauthorized' });
}

// POST a completed MRC questionnaire (called from cuidadores.html on "Finalizar")
app.post('/api/mrc-results', (req, res) => {
  const { id, initials, answers, items, score, lang } = req.body || {};
  if (!initials || typeof initials !== 'string' || !answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Missing initials or answers' });
  }
  const list = loadResults();
  const entryId = (typeof id === 'string' && /^[a-z0-9-]{6,64}$/i.test(id))
    ? id
    : Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  // Idempotent: the same submission id is stored only once
  if (list.some(r => r.id === entryId)) return res.json({ ok: true, id: entryId, duplicate: true });

  list.push({
    id:          entryId,
    scale:       'MRC',
    initials:    initials.trim().toUpperCase().slice(0, 20),
    completedAt: new Date().toISOString(),
    lang:        typeof lang === 'string' ? lang.slice(0, 5) : 'es',
    score:       Number.isFinite(score) ? score : null,
    answers,
    items:       Array.isArray(items) ? items.slice(0, 50) : [],
  });
  try {
    saveResults(list);
    res.json({ ok: true, id: entryId });
  } catch (e) {
    console.error('Error saving result:', e);
    res.status(500).json({ error: 'Could not save result' });
  }
});

// GET all MRC results (read-only)
app.get('/api/mrc-results', requireRepoKey, (req, res) => {
  const list = loadResults().sort((a, b) => (b.completedAt || '').localeCompare(a.completedAt || ''));
  res.json({ results: list, protected: !!process.env.REPO_PASSWORD });
});

app.listen(PORT, () => {
  console.log(`Clinical Rating Scales running on port ${PORT}`);
});
