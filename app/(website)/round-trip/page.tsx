import RoundTripForm from "@/components/website/RoundTripForm";
import { getAllCars } from "@/features/tours/services/get-all-cars";

export default async function RoundTripPage() {
  const cars = await getAllCars();

  return (
    <>
      {/* Page Header Band */}
      <div className="page-header">
        <div className="container">
          <span className="label">Go & Return in Comfort</span>
          <h1>Round Trip Booking</h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <RoundTripForm cars={cars} />
        </div>
      </div>
    </>
  );
}