import { notFound } from "next/navigation";
import { CalendarDays, CarFront, Fuel, Users } from "lucide-react";

import { getPublicTourById } from "@/features/website/services/get-public-tour-by-id";
import BookingForm from "@/components/website/BookingForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TourDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const tour = await getPublicTourById(id);

  if (!tour) {
    notFound();
  }

  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="relative">

        <img
          src={tour.coverImage}
          alt={tour.title}
          className="h-[70vh] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-14 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 text-white">

          <p className="mb-3 text-amber-400">
            Premium Tour Package
          </p>

          <h1 className="heading text-5xl font-bold">
            {tour.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 backdrop-blur">
              <CalendarDays size={18} />
              {tour.days} Days / {tour.nights} Nights
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 backdrop-blur">
              <CarFront size={18} />
              {tour.cars.length} Cars
            </div>

          </div>

        </div>

      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Description */}

        <section>

          <h2 className="heading mb-5 text-3xl font-bold">
            About this Tour
          </h2>

          <p className="max-w-4xl text-lg leading-8 text-slate-600">
            {tour.description}
          </p>

        </section>

        {/* Gallery */}

        <section>

          <h2 className="heading mb-8 text-3xl font-bold">
            Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {tour.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={image}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            ))}

          </div>

        </section>

        {/* Cars */}

        <section>

          <h2 className="heading mb-8 text-3xl font-bold">
            Available Cars
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {tour.cars.map((car) => (
              <div
                key={car.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >

                <img
                  src={car.images[0]}
                  className="h-56 w-full object-cover"
                />

                <div className="space-y-4 p-6">

                  <h3 className="text-2xl font-semibold">
                    {car.name}
                  </h3>

                  <div className="space-y-3 text-slate-600">

                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      {car.seats} Seats
                    </div>

                    <div className="flex items-center gap-2">
                      <Fuel size={18} />
                      {car.fuelType}
                    </div>

                    <div>
                      {car.transmission}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        <BookingForm
          tourTitle={tour.title}
          cars={tour.cars}
        />

      </div>

    </main>
  );
}