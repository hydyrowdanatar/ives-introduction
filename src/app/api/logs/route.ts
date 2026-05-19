import { getDb } from "@/lib/db";
import { logs } from "@/lib/schema";

export async function POST(request: Request) {
  const { text } = await request.json();
  const db = getDb();
  const [row] = await db.insert(logs).values({ text }).returning();
  return Response.json(
    { id: row.id, created_at: row.createdAt, text: row.text },
    { status: 201 }
  );
}
