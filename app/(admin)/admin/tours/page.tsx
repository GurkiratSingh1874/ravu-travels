import TourForm from "@/features/tours/components/tour-form";
import ToursTable from "@/features/tours/components/tours-table";

import { getAllCars } from "@/features/tours/services/get-all-cars";
import { getTours } from "@/features/tours/services/get-tours";

export default async function ToursPage() {
  const cars = await getAllCars();
  const tours = await getTours();

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Tours
      </h1>

      <TourForm cars={cars} />

      <ToursTable tours={tours} />
    </div>
  );
}