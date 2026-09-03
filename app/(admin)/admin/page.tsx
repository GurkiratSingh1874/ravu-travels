import Link from "next/link";
import { getDashboardData } from "@/features/dashboard/services/get-dashboard-data";
import { Car, MapPin, Star, TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const data = await getDashboardData();

  const stats = [
    { label: "Total Cars", value: data.totalCars, icon: Car, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Total Tours", value: data.totalTours, icon: MapPin, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Featured Tours", value: data.featuredTours, icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  return (
    <div className="space-y-8 max-w-6xl">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Overview of RAVU TRAVELS</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="stat-card flex items-center gap-5">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg}`}>
              <Icon size={22} className={color} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
              <h2 className="text-3xl font-bold text-slate-900">{value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Cars */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Recent Cars</h2>
            <Link
              href="/admin/cars"
              className="text-xs font-semibold text-amber-600 hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {data.recentCars.length === 0 ? (
              <p className="px-6 py-8 text-sm text-center text-slate-400">No cars yet.</p>
            ) : (
              data.recentCars.map((car) => (
                <div key={car.id} className="flex items-center justify-between px-6 py-3.5">
                  <span className="text-sm font-medium text-slate-800">{car.name}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    {car.category}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Tours */}
        <div className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Recent Tours</h2>
            <Link
              href="/admin/tours"
              className="text-xs font-semibold text-amber-600 hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {data.recentTours.length === 0 ? (
              <p className="px-6 py-8 text-sm text-center text-slate-400">No tours yet.</p>
            ) : (
              data.recentTours.map((tour) => (
                <div key={tour.id} className="flex items-center justify-between px-6 py-3.5">
                  <span className="text-sm font-medium text-slate-800">{tour.title}</span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    {tour.days} Days
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}