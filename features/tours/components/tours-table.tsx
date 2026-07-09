import { Tour, Car } from "@prisma/client";
import DeleteTourButton from "./delete-tour-button";
import EditTourButton from "./edit-tour-button";

type TourWithCars = Tour & {
  cars: Car[];
};

type Props = {
  tours: TourWithCars[];
};

export default function ToursTable({ tours }: Props) {
  return (
    <table className="w-full border-collapse border mt-10">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Cover</th>
          <th className="border p-2">Tour</th>
          <th className="border p-2">Duration</th>
          <th className="border p-2">Cars</th>
          <th className="border p-2">Featured</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {tours.map((tour) => (
          <tr key={tour.id}>
            <td className="border p-2">
              <img
                src={tour.coverImage}
                className="h-16 w-24 rounded object-cover"
              />
            </td>

            <td className="border p-2">
              {tour.title}
            </td>

            <td className="border p-2">
              {tour.days}D / {tour.nights}N
            </td>

            <td className="border p-2">
              {tour.cars.map((car) => car.name).join(", ")}
            </td>

            <td className="border p-2">
              {tour.featured ? "⭐ Yes" : "No"}
            </td>

            <td className="border p-2">
              <div className="flex gap-2">
                <EditTourButton id={tour.id} />
                <DeleteTourButton id={tour.id} />
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}