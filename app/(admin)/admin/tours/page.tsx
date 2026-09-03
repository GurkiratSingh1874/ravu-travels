import TourForm from "@/features/tours/components/tour-form";
import ToursTable from "@/features/tours/components/tours-table";
import { getAllCars } from "@/features/tours/services/get-all-cars";
import { getTours } from "@/features/tours/services/get-tours";

export default async function ToursPage() {
  const cars = await getAllCars();
  const tours = await getTours();

  return (
    <div className="max-w-6xl space-y-10">

      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tours</h1>
        <p className="text-sm text-slate-500 mt-1">Add and manage tour packages.</p>
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6">
        <h2 className="text-base font-semibold text-slate-800 mb-6">Add New Tour</h2>
        <TourForm cars={cars} />
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-800 mb-4">All Tours</h2>
        <ToursTable tours={tours} />
      </div>

    </div>
  );
}