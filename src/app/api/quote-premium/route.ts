import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

interface RateRow {
  dwellingamountintiv: boolean;
  additionalbuildingamountintiv: boolean;
  businesspersonalpropertyintiv: boolean;
  annualrentintiv: boolean;
  propertyrate1: number;
  propertyrate2: number;
  generalliabilityrate: number;
  additionalliabilityratio: number;
  triarate: number;
  taxrate: number;
  brokerfee: number;
  pricepersqftmin: number;
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
    if (isNaN(sqftVal) || sqftVal < 100 || sqftVal > 15000)
      return NextResponse.json({ error: "Square footage must be between 100 and 15,000" }, { status: 400 });

    if (annualRent <= dwelling * 0.05)
      return NextResponse.json({ error: "Annual rent must be greater than 5% of dwelling amount" }, { status: 400 });
    if (annualRent >= dwelling * 0.55)
      return NextResponse.json({ error: "Annual rent must be less than 55% of dwelling amount" }, { status: 400 });

    const result = await db.query<RateRow>(
      `SELECT
         dwellingamountintiv,
         additionalbuildingamountintiv,
         businesspersonalpropertyintiv,
         annualrentintiv,
         propertyrate1,
         propertyrate2,
         generalliabilityrate,
         additionalliabilityratio,
         triarate,
         taxrate,
         brokerfee,
         pricepersqftmin
       FROM productinsurancerate
       WHERE zipcode = $1
         AND deductibleamount = $2
         AND active = true
       LIMIT 1`,
      [String(zipcode), String(deductible)]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "No rate available for this zipcode and deductible" },
        { status: 404 }
      );
    }

    const rate = result.rows[0];

    const pricePerSqFt = dwelling / sqftVal;
    if (pricePerSqFt < rate.pricepersqftmin) {
      return NextResponse.json(
        { error: `Dwelling amount too low — minimum $${rate.pricepersqftmin}/sq ft` },
        { status: 400 }
      );
    }
    if (pricePerSqFt > 700) {
      return NextResponse.json(
        { error: "Dwelling amount too high — maximum $700/sq ft" },
        { status: 400 }
      );
    }

    // TIV calculation
    const BPP = 5000;
    const additionalBuildings = 0;

    let calcTIV = 0;
    if (rate.dwellingamountintiv) calcTIV += dwelling;
    if (rate.additionalbuildingamountintiv) calcTIV += additionalBuildings;
    if (rate.businesspersonalpropertyintiv) calcTIV += BPP;
    if (rate.annualrentintiv) calcTIV += annualRent;

    const propertyRate = isWindHail ? rate.propertyrate1 : rate.propertyrate2;
    const propertyPremium = Math.round((calcTIV / 100) * propertyRate);

    const liabilityPremium =
      rate.generalliabilityrate +
      (units - 1) * rate.generalliabilityrate * rate.additionalliabilityratio;

    const triaPremium = Math.round((propertyPremium + liabilityPremium) * rate.triarate);

    const totalPropertyPremium = propertyPremium + triaPremium;
    const totalPremium = totalPropertyPremium + liabilityPremium;
    const taxesFees = totalPremium * rate.taxrate;
    const totalAmount = Math.round(totalPremium + taxesFees + rate.brokerfee);

    return NextResponse.json({
      totalAmount,
      breakdown: {
        propertyPremium,
        liabilityPremium,
        triaPremium,
        taxesFees: Math.round(taxesFees),
        brokerFee: rate.brokerfee,
        totalPremium,
        totalAmount,
      },
    });
  } catch (err) {
    console.error("quote-premium error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
