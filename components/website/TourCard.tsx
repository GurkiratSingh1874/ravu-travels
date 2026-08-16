import Link from "next/link";
import { Car, Tour } from "@prisma/client";

type TourWithCars = Tour & {
  cars: Car[];
};

type Props = {
  tour: TourWithCars;
};

export default function TourCard({ tour }: Props) {
  return (
    <Link href={`/tours/${tour.id}`}>
      <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative h-80 overflow-hidden">

          <img
            loading="lazy"
            src={tour.coverImage}
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {tour.featured && (
            <span className="absolute left-6 top-6 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
              Featured
            </span>
          )}

          <div className="absolute bottom-5 left-5 text-white">

            <h2 className="heading text-3xl font-bold">
              {tour.title}
            </h2>

            <p className="mt-2 text-sm text-gray-200">
              {tour.days} Days • {tour.nights} Nights
            </p>

          </div>

          <div className="flex justify-center">
            <span className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-slate-900">
              Explore Tour →
            </span>
          </div>

        </div>


      </article>
    </Link>
  );
}