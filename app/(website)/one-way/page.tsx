import OneWayForm from "@/components/website/OneWayForm";
import { getAllCars } from "@/features/tours/services/get-all-cars";

export default async function OneWayPage() {
  const cars = await getAllCars();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">
        One Way Taxi Booking
      </h1>

      <OneWayForm cars={cars} />
    </div>
  );
}