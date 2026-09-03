"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
    } catch {
      // ignore
    }

    // Hard navigate to clear all in-memory client state and cache
    window.location.replace("/login");
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="text-left text-red-400 transition hover:text-red-300 disabled:opacity-50"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}