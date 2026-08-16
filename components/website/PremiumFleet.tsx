import Link from "next/link";
import { getAvailableCars } from "@/features/website/services/get-available-cars";

export default async function PremiumFleet() {
  const cars = await getAvailableCars();

  return (
    <section className="bg-slate-50 py-24">

      <div className="container">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-amber-500">
            Our Fleet
          </p>

          <h2 className="heading mt-3 text-5xl font-bold">
            Premium Cars For Every Journey
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cars.map((car) => (
            <div
              key={car.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="space-y-3 p-6">

                <h3 className="text-2xl font-bold">
                  {car.name}
                </h3>

                <p className="text-gray-600">
                  {car.category}
                </p>

                <div className="flex justify-between text-sm text-gray-500">

                  <span>{car.seats} Seats</span>

                  <span>{car.transmission}</span>

                  <span>{car.fuelType}</span>

                </div>

                <Link
                  href="/contact"
                  className="mt-4 inline-block rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
                >
                  Book Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}