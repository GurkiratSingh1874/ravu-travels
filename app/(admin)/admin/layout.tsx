import Link from "next/link";
import LogoutButton from "@/features/auth/components/logout-button";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <aside className="w-64 bg-black text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          RAVU ADMIN
        </h1>

        <nav className="flex flex-col gap-4">

          <Link href="/admin">
            Dashboard
          </Link>

          <Link
        href="/admin/cars"
        className="rounded p-2 hover:bg-gray-800"
        >
        🚗 Cars
        </Link>

        <Link
        href="/admin/tours"
        className="rounded p-2 hover:bg-gray-800"
        >
        🗺 Tours
        </Link>

        <Link href="/admin/records"
          className="rounded p-2 hover:bg-gray-800">
            Records
          </Link>

        <Link
        href="/admin/contact"
        className="rounded p-2 hover:bg-gray-800"
        >
        📩 Contact
        </Link>

          <LogoutButton />

        </nav>

      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>

    </div>
  );
}