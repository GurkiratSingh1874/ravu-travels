"use server";

import { prisma } from "@/lib/prisma";

export async function createContactAction(formData: FormData) {
  const name = formData.get("name")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  if (name.length < 2) {
    return {
      success: false,
      message: "Please enter your name.",
    };
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    return {
      success: false,
      message: "Please enter a valid 10-digit mobile number.",
    };
  }

  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (message.length < 10) {
    return {
      success: false,
      message: "Message should contain at least 10 characters.",
    };
  }

  await prisma.contactQuery.create({
    data: {
      name,
      phone,
      email,
      message,
    },
  });

  return {
    success: true,
    message: "Message sent successfully.",
  };
}