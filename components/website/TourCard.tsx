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
      <div className="overflow-hidden rounded-lg border shadow hover:shadow-lg transition cursor-pointer">

        <img
          src={tour.coverImage}
          alt={tour.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold">
            {tour.title}
          </h2>

          <p className="mt-2 text-gray-600 line-clamp-2">
            {tour.description}
          </p>

          <p className="mt-3 font-semibold">
            {tour.days} Days / {tour.nights} Nights
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {tour.cars.length} Cars Available
          </p>
        </div>

      </div>
    </Link>
  );
}