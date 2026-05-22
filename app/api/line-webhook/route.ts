export async function POST(req: Request) {
  const body = await req.text();

  fetch("https://script.google.com/macros/s/AKfycbwFpZDhMveHhdOYdDkh02JpWk28jUCBqikyM-Urg_6Uw2jTH7d8ZluKxinKTWh5_20N/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  }).catch((err) => {
    console.error("Forward to GAS failed:", err);
  });

  return new Response("ok", {
    status: 200
  });
}

export async function GET() {
  return new Response("ok", {
    status: 200
  });
}