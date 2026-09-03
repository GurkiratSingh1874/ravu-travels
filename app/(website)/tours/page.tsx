import TourCard from "@/components/website/TourCard";
import { getPublicTours } from "@/features/website/services/get-public-tours";

export default async function ToursPage() {
  const tours = await getPublicTours();

  return (
    <>
      {/* Page Header Band */}
      <div className="page-header">
        <div className="container">
          <span className="label">Explore Himachal Pradesh</span>
          <h1>Tour Packages</h1>
        </div>
      </div>

      <div className="container py-16">
        {tours.length === 0 ? (
          <p className="text-center text-slate-500 py-20 text-lg">
            No tours available yet. Check back soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}