import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/jwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    return NextResponse.json(
      { success: false, message: "Invalid email or password." },
      { status: 401 }
    );
  }

  const validPassword = await bcrypt.compare(password, admin.password);

  if (!validPassword) {
    return NextResponse.json(
      { success: false, message: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = createToken({
    id: admin.id,
    email: admin.email,
  });

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}