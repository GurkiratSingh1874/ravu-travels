import CarForm from "@/features/cars/components/car-form";
import CarsTable from "@/features/cars/components/cars-table";
import { getCars } from "@/features/cars/services/get-cars";

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Add Car
        </h1>

        <CarForm />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          All Cars
        </h2>

        <CarsTable cars={cars} />
      </div>
    </div>
  );
}

