import pool from "@/lib/db";

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
    const result = await pool.query(
      "INSERT INTO leads (text) VALUES ($1) RETURNING id, created_at, text",
      [text.trim()]
    );
    return Response.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error("leads POST error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}