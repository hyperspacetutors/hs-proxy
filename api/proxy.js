export function GET(request) {
  return fetch('https://script.google.com/macros/s/AKfycbwP7J6U1NtK7araBy2U4RO51bxgjs6w3wc4LjJb-_rF9TCYrcVRaV-GwC-G7QFB-9r1IQ/exec', {
    redirect: 'follow',
    headers: { 'Accept': 'application/json' }
  })
  .then(res => res.text())
  .then(text => {
    const data = JSON.parse(text);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  })
  .catch(err => new Response(JSON.stringify({ error: err.message }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  }));
}
