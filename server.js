const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'progress.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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
