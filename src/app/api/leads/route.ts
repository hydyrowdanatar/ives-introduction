import { getDb } from "@/lib/db";
import { leads } from "@/lib/schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { text } = body as Record<string, unknown>;
  if (!text || typeof text !== "string" || text.trim() === "") {
    return Response.json({ error: "text is required" }, { status: 400 });
  }

  try {
    const db = getDb();
    const [row] = await db
      .insert(leads)
      .values({ text: text.trim() })
      .returning();
    return Response.json(
      { id: row.id, created_at: row.createdAt, text: row.text },
      { status: 201 }
    );
  } catch (err) {
    console.error("leads POST error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
