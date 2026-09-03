import CarForm from "@/features/cars/components/car-form";
import CarsTable from "@/features/cars/components/cars-table";
import { getCars } from "@/features/cars/services/get-cars";

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="max-w-5xl space-y-10">

      <div>
        <h1 className="text-2xl font-bold text-slate-900">Cars</h1>
        <p className="text-sm text-slate-500 mt-1">Add and manage vehicles in your fleet.</p>
      </div>

      <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6">
        <h2 className="text-base font-semibold text-slate-800 mb-6">Add New Car</h2>
        <CarForm />
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-800 mb-4">All Cars</h2>
        <CarsTable cars={cars} />
      </div>

    </div>
  );
}
