import TourCard from "@/components/website/TourCard";
import { getFeaturedTours } from "../services/get-featured-tours";

export default async function FeaturedTours() {
  const tours = await getFeaturedTours();

  if (tours.length === 0) {
  return (
    <section className="py-16 text-center">
      <h2 className="mb-4 text-4xl font-bold">
        Featured Tours
      </h2>

      <p className="text-gray-500">
        Featured tours will appear here soon.
      </p>
    </section>
  );
}

  return (
    <section className="py-16">

      <h2 className="mb-8 text-center text-4xl font-bold">
        Featured Tours
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}

      </div>

    </section>
  );
}