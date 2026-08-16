"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function loginAction(
  email: string,
  password: string
) {
  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if (!admin) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const validPassword = await bcrypt.compare(
    password,
    admin.password
  );

  if (!validPassword) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const token = createToken({
    id: admin.id,
    email: admin.email,
  });

  const cookieStore = await cookies();
  



  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  

  return {
    success: true,
  };
}