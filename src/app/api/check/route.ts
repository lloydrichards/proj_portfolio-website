import { db } from "@/services/db";
import { occupation } from "@/services/db/schema";

export const revalidate = 0;

export async function GET() {
  const data = await db.select().from(occupation);
  return Response.json({ data });
}
