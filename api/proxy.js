export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwP7J6U1NtK7araBy2U4RO51bxgjs6w3wc4LjJb-_rF9TCYrcVRaV-GwC-G7QFB-9r1IQ/exec');
    const data = await response.json();
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}
