const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'progress.json');

app.use(express.json({ limit: '10mb' }));

// Portal routes — must be before express.static
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'portal.html')));
app.get('/historia-natural', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/cuidadores', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cuidadores.html')));
app.get('/clinicos', (req, res) => res.sendFile(path.join(__dirname, 'public', 'portal.html')));

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
      to:      'castilla@joaquincastilla.com',
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

app.listen(PORT, () => {
  console.log(`Clinical Rating Scales running on port ${PORT}`);
});
