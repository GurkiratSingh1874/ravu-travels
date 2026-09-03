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
    <div className="bg-slate-50">

      {/* Hero */}
      <div className="relative">
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="h-[65vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-12 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Premium Tour Package
          </p>
          <h1 className="heading text-4xl font-bold md:text-5xl">
            {tour.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm backdrop-blur">
              <CalendarDays size={16} />
              {tour.days} Days / {tour.nights} Nights
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm backdrop-blur">
              <CarFront size={16} />
              {tour.cars.length} Car{tour.cars.length !== 1 ? "s" : ""} Available
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">

        {/* About */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
            Tour Overview
          </p>
          <h2 className="heading mb-5 text-3xl font-bold">
            About this Tour
          </h2>
          <p className="max-w-4xl text-lg leading-8 text-slate-600">
            {tour.description}
          </p>
        </div>

        {/* Gallery */}
        {tour.gallery.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
              Photo Gallery
            </p>
            <h2 className="heading mb-8 text-3xl font-bold">
              Gallery
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tour.gallery.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cars */}
        {tour.cars.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
              Fleet
            </p>
            <h2 className="heading mb-8 text-3xl font-bold">
              Available Cars
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tour.cars.map((car) => (
                <div
                  key={car.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={car.images[0]}
                    alt={car.name}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <div className="space-y-2 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Users size={15} />
                        {car.seats} Seats
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel size={15} />
                        {car.fuelType}
                      </div>
                      <div className="text-slate-400">{car.transmission}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Form */}
        <BookingForm tourTitle={tour.title} cars={tour.cars} />

      </div>
    </div>
  );
}