"use server";

import { cookies } from "next/headers";

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.set("token", "", {
    path: "/",
    maxAge: 0,
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax",
  });
  cookieStore.delete("token");
}