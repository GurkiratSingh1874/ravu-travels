import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";
import LogoutButton from "@/features/auth/components/logout-button";
import { LayoutDashboard, Car, MapPin, ClipboardList, MessageSquare, LogOut } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = verifyToken(token);
  if (!payload) {
    redirect("/login");
  }

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/cars", label: "Cars", icon: Car },
    { href: "/admin/tours", label: "Tours", icon: MapPin },
    { href: "/admin/records", label: "Records", icon: ClipboardList },
    { href: "/admin/contact", label: "Contacts", icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-slate-900 text-white flex flex-col">

        {/* Logo */}
        <div className="px-6 py-7 border-b border-slate-800">
          <Link href="/admin">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
              Admin Panel
            </p>
            <h1 className="text-xl font-bold text-amber-400 tracking-wide">
              RAVU TRAVELS
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              <Icon size={18} className="shrink-0 text-slate-400" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-5 border-t border-slate-800">
          <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-all hover:bg-red-500/10 cursor-pointer">
            <LogOut size={18} className="shrink-0" />
            <LogoutButton />
          </div>
          <Link
            href="/"
            className="mt-2 flex items-center gap-3 rounded-xl px-4 py-2.5 text-xs text-slate-500 transition hover:text-slate-300"
          >
            ← Back to Website
          </Link>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">

        {/* Top bar */}
        <div className="border-b border-slate-200 bg-white px-8 py-4">
          <p className="text-sm text-slate-500">
            Logged in as Admin &nbsp;·&nbsp;
            <Link href="/" className="text-amber-600 hover:underline">
              View Website ↗
            </Link>
          </p>
        </div>

        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  );
}