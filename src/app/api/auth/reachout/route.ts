import { PrismaClient } from "@/generated/prisma"; // or just "prisma" if not generated
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      companyName,
      industry,
      employees,
      location,
      website,
      description,
    } = body;

    if (!companyName || !industry || !employees || !location || !description) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Save to DB
    const newReachout = await prisma.reachout.create({
      data: {
        companyName,
        industry,
        employees,
        location,
        websiteUrl: website, // Map frontend 'website' to DB field 'websiteUrl'
        Description:description, // Assuming your DB has a lowercase 'description' field
      },
    });

    return NextResponse.json(
      { message: "Form submitted successfully", data: newReachout },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving reachout:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
