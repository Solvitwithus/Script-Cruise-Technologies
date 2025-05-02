import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, date, time, notes } = body;

    if (!name || !email || !company || !date || !time) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const combinedDate = new Date(`${date}T${time}`);

    const demo = await prisma.demonstration.create({
      data: {
        name,
        email,
        company,
        date: combinedDate,
        time: combinedDate, // store same DateTime for both
        notes,
      },
    });

    return NextResponse.json(
      { message: "Form submitted successfully!", data: demo },
      { status: 200 }
    );
  } catch (error) {
    console.error("Demo form error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
