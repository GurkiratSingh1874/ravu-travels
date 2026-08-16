import Link from "next/link";
import { getDashboardData } from "@/features/dashboard/services/get-dashboard-data";

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-10">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-500">Cars</p>
          <h2 className="text-4xl font-bold">
            {data.totalCars}
          </h2>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-500">Tours</p>
          <h2 className="text-4xl font-bold">
            {data.totalTours}
          </h2>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-500">
            Featured Tours
          </p>

          <h2 className="text-4xl font-bold">
            {data.featuredTours}
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="rounded-lg bg-white p-6 shadow">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl font-bold">
              Recent Cars
            </h2>

            <Link
              href="/admin/cars"
              className="text-blue-600"
            >
              View All
            </Link>

          </div>

          <div className="space-y-3">

            {data.recentCars.map((car) => (
              <div
                key={car.id}
                className="flex justify-between border-b pb-2"
              >
                <span>{car.name}</span>

                <span className="text-gray-500">
                  {car.category}
                </span>
              </div>
            ))}

          </div>

        </div>

        <div className="rounded-lg bg-white p-6 shadow">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl font-bold">
              Recent Tours
            </h2>

            <Link
              href="/admin/tours"
              className="text-blue-600"
            >
              View All
            </Link>

          </div>

          <div className="space-y-3">

            {data.recentTours.map((tour) => (
              <div
                key={tour.id}
                className="flex justify-between border-b pb-2"
              >
                <span>{tour.title}</span>

                <span>
                  {tour.days} Days
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}