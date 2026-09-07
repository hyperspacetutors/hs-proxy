import express from 'express';

const app = express();

app.get('/api/proxy', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwP7J6U1NtK7araBy2U4RO51bxgjs6w3wc4LjJb-_rF9TCYrcVRaV-GwC-G7QFB-9r1IQ/exec', {
      redirect: 'follow',
      headers: { 'Accept': 'application/json' }
    });
    const text = await response.text();
    const data = JSON.parse(text);
    res.json(data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000);
