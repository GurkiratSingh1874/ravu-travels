import CarForm from "@/features/cars/components/car-form";
import { getCarById } from "@/features/cars/services/get-car-by-id";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCarPage({ params }: Props) {
  const { id } = await params;

  const car = await getCarById(id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Edit Car
      </h1>

      <CarForm car={car} />
    </div>
  );
}