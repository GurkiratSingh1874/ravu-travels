import OneWayForm from "@/components/website/OneWayForm";
import { getAllCars } from "@/features/tours/services/get-all-cars";

export default async function OneWayPage() {
  const cars = await getAllCars();

  return (
    <>
      {/* Page Header Band */}
      <div className="page-header">
        <div className="container">
          <span className="label">Hassle-Free Travel</span>
          <h1>One Way Taxi Booking</h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <OneWayForm cars={cars} />
        </div>
      </div>
    </>
  );
}