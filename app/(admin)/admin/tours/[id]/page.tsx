import TourForm from "@/features/tours/components/tour-form";
import { getAllCars } from "@/features/tours/services/get-all-cars";
import { getTourById } from "@/features/tours/services/get-tour-by-id";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTourPage({
  params,
}: Props) {
  const { id } = await params;

  const tour = await getTourById(id);
  const cars = await getAllCars();

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Edit Tour
      </h1>

      <TourForm
        cars={cars}
        tour={tour}
      />
    </div>
  );
}