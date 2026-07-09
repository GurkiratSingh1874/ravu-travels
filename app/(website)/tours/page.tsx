import TourCard from "@/components/website/TourCard";
import { getPublicTours } from "@/features/website/services/get-public-tours";

export default async function ToursPage() {
  const tours = await getPublicTours();

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">

      <h1 className="mb-10 text-4xl font-bold">
        Tour Packages
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
          />
        ))}
      </div>

    </div>
  );
}