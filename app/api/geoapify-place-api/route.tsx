import { NextRequest, NextResponse } from "next/server";

const GEOAPIFY_PLACE_KEY = process.env.GEOAPIFY_PLACE_KEY;
const BOUNDING_BOX = "rect:88.0018,26.6236,92.6737,20.7382"; // full Bangladesh
const LIMIT = 50; // more results


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const rawCategory = searchParams.get("categories") || "";
  const categoryParam = rawCategory.toLowerCase();

  // Use common categories for known keywords
  let geoCategory = "commercial.supermarket"; // fallback

  if (categoryParam.includes("cafe")) {
    geoCategory = "catering.cafe";
  } else if (categoryParam.includes("restaurant")) {
    geoCategory = "catering.restaurant";
  } else if (categoryParam.includes("hospital")) {
    geoCategory = "healthcare.hospital";
  } else if (categoryParam.includes("school")) {
    geoCategory = "education.school";
  } else if (categoryParam.includes("university")) {
    geoCategory = "education.university";
  } else if (categoryParam.includes("pharmacy")) {
    geoCategory = "healthcare.pharmacy";
  }

  const apiUrl = `https://api.geoapify.com/v2/places?categories=${geoCategory}&filter=${BOUNDING_BOX}&limit=${LIMIT}&apiKey=${GEOAPIFY_PLACE_KEY}`;

  try {
    const res = await fetch(apiUrl);
    const geoData = await res.json();

    // Return as `data: [...]`
    return NextResponse.json({ data: geoData.features });
  } catch (error) {
    console.error("Geoapify API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from Geoapify" },
      { status: 500 }
    );
  }
}
