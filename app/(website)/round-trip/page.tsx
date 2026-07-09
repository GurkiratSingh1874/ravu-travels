import RoundTripForm from "@/components/website/RoundTripForm";
import { getAllCars } from "@/features/tours/services/get-all-cars";

export default async function RoundTripPage() {
  const cars = await getAllCars();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Round Trip Booking
      </h1>

      <RoundTripForm cars={cars} />
    </div>
  );
}