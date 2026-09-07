import express from 'express';

const app = express();

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwP7J6U1NtK7araBy2U4RO51bxgjs6w3wc4LjJb-_rF9TCYrcVRaV-GwC-G7QFB-9r1IQ/exec';

app.get('/api/proxy', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  try {
    // First request to get the redirect location
    const initial = await fetch(APPS_SCRIPT_URL, { redirect: 'manual' });
    const redirectURL = initial.headers.get('location');
    
    if (redirectURL) {
      // Follow the redirect manually
      const response = await fetch(redirectURL);
      const text = await response.text();
      res.send(text);
    } else {
      // No redirect, read directly
      const text = await initial.text();
      res.send(text);
    }
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000);
