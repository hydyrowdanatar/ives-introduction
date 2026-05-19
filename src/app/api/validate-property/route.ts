import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { productInsuranceRate } from "@/lib/schema";
import { and, eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const zipcode = searchParams.get("zipcode") ?? "";
  const sqft = Number(searchParams.get("sqft"));
  const dwelling = Number(searchParams.get("dwelling"));

  if (!zipcode || isNaN(sqft) || sqft <= 0 || isNaN(dwelling) || dwelling <= 0) {
    return NextResponse.json({ error: "Missing or invalid parameters" }, { status: 400 });
  }

  try {
    const db = getDb();
    const [rate] = await db
      .select({ pricePerSqftMin: productInsuranceRate.pricePerSqftMin })
      .from(productInsuranceRate)
      .where(and(eq(productInsuranceRate.zipcode, zipcode), eq(productInsuranceRate.active, true)))
      .limit(1);

    if (!rate) {
      return NextResponse.json(
        { error: "No rates available for this zipcode" },
        { status: 404 }
      );
    }

    const pricePerSqFtMin = Number(rate.pricePerSqftMin);
    const pricePerSqFt = dwelling / sqft;

    if (pricePerSqFt < pricePerSqFtMin) {
      return NextResponse.json(
        { error: `Dwelling amount too low — minimum $${pricePerSqFtMin}/sq ft` },
        { status: 400 }
      );
    }

    return NextResponse.json({ valid: true });
  } catch (err) {
    console.error("validate-property error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
