import { getDb } from "@/lib/db";
import { sql } from "drizzle-orm";

export async function GET() {
  try {
    const db = getDb();
    const result = await db.execute(sql`SELECT NOW() AS time`);
    return Response.json({ ok: true, time: result.rows[0].time });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
