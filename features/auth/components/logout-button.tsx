"use client";

import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/logout";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await logoutAction();

    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="text-left text-red-400 hover:text-red-300"
    >
      Logout
    </button>
  );
}