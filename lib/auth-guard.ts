import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  return payload;
}

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}
