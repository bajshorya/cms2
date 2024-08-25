import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

interface SignupRequestBody {
  email: string;
  password: string;
  name: string;
}
export default async function POST(req: NextRequest) {
  try {
    const body: SignupRequestBody = await req.json();

    const { email, password, name } = body;
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
