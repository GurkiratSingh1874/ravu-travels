import { notFound } from "next/navigation";
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
    <div className="max-w-7xl mx-auto px-6 py-10">

      <img
        src={tour.coverImage}
        alt={tour.title}
        className="w-full h-[500px] rounded-xl object-cover"
      />

      <h1 className="text-4xl font-bold mt-8">
        {tour.title}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {tour.description}
      </p>

      <div className="mt-6 text-xl font-semibold">
        {tour.days} Days / {tour.nights} Nights
      </div>

      <h2 className="text-2xl font-bold mt-10">
        Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-5">
        {tour.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-60 w-full rounded-lg object-cover"
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10">
        Available Cars
      </h2>

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {tour.cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg p-4"
          >
            <img
              src={car.images[0]}
              className="h-40 w-full rounded object-cover"
            />

            <h3 className="mt-3 font-bold">
              {car.name}
            </h3>

            <p>
              {car.seats} Seats
            </p>

            <p>
              {car.fuelType}
            </p>

            <p>
              {car.transmission}
            </p>
          </div>
        ))}
      </div>
      <BookingForm
        tourTitle={tour.title}
        cars={tour.cars}
        />

    </div>
  );
}