import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { productInsuranceRate } from "@/lib/schema";
import { and, eq } from "drizzle-orm";

const PropertySqFtMin = 100;
const PropertySqFtMax = 15000;
const BASIC_TIER_RATIO = 0.85;

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      zipcode,
      deductible,
      dwellingAmount,
      monthlyRents,
      unitCount,
      sqft,
      isWindHail = true,
    } = body;

    if (!zipcode || !deductible || !dwellingAmount || !monthlyRents || !unitCount || !sqft) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dwelling = parseFloat(String(dwellingAmount).replace(/[^0-9.]/g, ""));
    const annualRent = parseFloat(String(monthlyRents).replace(/[^0-9.]/g, "")) * 12;
    const units = parseInt(String(unitCount), 10);
    const sqftVal = parseInt(String(sqft), 10);

    if (isNaN(dwelling) || dwelling <= 0)
      return NextResponse.json({ error: "Invalid dwelling amount" }, { status: 400 });
    if (isNaN(annualRent) || annualRent <= 0)
      return NextResponse.json({ error: "Invalid rent amount" }, { status: 400 });
    if (isNaN(units) || units < 1 || units > 8)
      return NextResponse.json({ error: "Unit count must be between 1 and 8" }, { status: 400 });
    if (isNaN(sqftVal) || sqftVal < PropertySqFtMin || sqftVal > PropertySqFtMax)
      return NextResponse.json({ error: `Square footage must be between ${PropertySqFtMin} and ${PropertySqFtMax.toLocaleString()}` }, { status: 400 });

    const db = getDb();
    const [rate] = await db
      .select({
        dwellingAmountInTiv: productInsuranceRate.dwellingAmountInTiv,
        additionalBuildingAmountInTiv: productInsuranceRate.additionalBuildingAmountInTiv,
        businessPersonalPropertyInTiv: productInsuranceRate.businessPersonalPropertyInTiv,
        annualRentInTiv: productInsuranceRate.annualRentInTiv,
        propertyRate1: productInsuranceRate.propertyRate1,
        propertyRate2: productInsuranceRate.propertyRate2,
        generalLiabilityRate: productInsuranceRate.generalLiabilityRate,
        additionalLiabilityRatio: productInsuranceRate.additionalLiabilityRatio,
        triaRate: productInsuranceRate.triaRate,
        taxRate: productInsuranceRate.taxRate,
        brokerFee: productInsuranceRate.brokerFee,
        pricePerSqftMin: productInsuranceRate.pricePerSqftMin,
      })
      .from(productInsuranceRate)
      .where(
        and(
          eq(productInsuranceRate.zipcode, String(zipcode)),
          eq(productInsuranceRate.deductibleAmount, String(deductible)),
          eq(productInsuranceRate.active, true)
        )
      )
      .limit(1);

    if (!rate) {
      return NextResponse.json(
        { error: "No rate available for this zipcode and deductible" },
        { status: 404 }
      );
    }

    // numeric(19,2) columns come back as strings from node-postgres
    const generalLiabilityRate = Number(rate.generalLiabilityRate);
    const brokerFee = Number(rate.brokerFee);
    const pricePerSqFtMin = Number(rate.pricePerSqftMin);

    const pricePerSqFt = dwelling / sqftVal;
    if (pricePerSqFt < pricePerSqFtMin) {
      return NextResponse.json(
        { error: `Dwelling amount too low — minimum $${pricePerSqFtMin}/sq ft` },
        { status: 400 }
      );
    }
    if (pricePerSqFt > 700) {
      return NextResponse.json(
        { error: "Dwelling amount too high — maximum $700/sq ft" },
        { status: 400 }
      );
    }

    const BPP = 5000;
    const additionalBuildings = 0;

    let calcTIV = 0;
    if (rate.dwellingAmountInTiv) calcTIV += dwelling;
    if (rate.additionalBuildingAmountInTiv) calcTIV += additionalBuildings;
    if (rate.businessPersonalPropertyInTiv) calcTIV += BPP;
    if (rate.annualRentInTiv) calcTIV += annualRent;

    const propertyRate = isWindHail ? rate.propertyRate1 : rate.propertyRate2;
    const propertyPremium = Math.round((calcTIV / 100) * (propertyRate ?? 0));

    const liabilityPremium =
      generalLiabilityRate +
      (units - 1) * generalLiabilityRate * (rate.additionalLiabilityRatio ?? 0);

    const triaPremium = Math.round(
      (propertyPremium + liabilityPremium) * (rate.triaRate ?? 0)
    );

    const totalPropertyPremium = propertyPremium + triaPremium;
    const totalPremium = totalPropertyPremium + liabilityPremium;
    const taxesFees = totalPremium * (rate.taxRate ?? 0);
    const totalAmount = round2(totalPremium + taxesFees + brokerFee);

    const myndManagedAmount = totalAmount;
    const basicAmount = round2(totalAmount * BASIC_TIER_RATIO);

    return NextResponse.json({
      myndManagedAmount,
      basicAmount,
      breakdown: {
        propertyPremium,
        liabilityPremium,
        triaPremium,
        taxesFees: round2(taxesFees),
        brokerFee,
        totalPremium,
        myndManagedAmount,
        basicAmount,
      },
    });
  } catch (err) {
    console.error("quote-premium error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
