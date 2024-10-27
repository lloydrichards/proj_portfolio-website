export const revalidate = 0;

export async function GET() {
  return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}
