import pool from "@/lib/db";

export async function POST(request: Request) {
  const { text } = await request.json();

  const result = await pool.query(
    "INSERT INTO logs (text) VALUES ($1) RETURNING id, created_at, text",
    [text]
  );

  return Response.json(result.rows[0], { status: 201 });
}
