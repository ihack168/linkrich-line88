export async function POST(req: Request) {
  console.log("LINE webhook received");

  return new Response("ok", {
    status: 200
  });
}

export async function GET() {
  return new Response("ok", {
    status: 200
  });
}