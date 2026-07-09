import { Car } from "@prisma/client";
import DeleteCarButton from "./delete-car-button";
import EditCarButton from "./edit-car-button";

type Props = {
  cars: Car[];
};

export default function CarsTable({ cars }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-10">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-3">Image</th>
          <th className="border p-3">Name</th>
          <th className="border p-3">Category</th>
          <th className="border p-3">Seats</th>
          <th className="border p-3">Fuel</th>
          <th className="border p-3">Transmission</th>
          <th className="border p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td className="border p-2">
              {car.images.length > 0 ? (
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="h-16 w-24 rounded object-cover"
                />
              ) : (
                <span>No Image</span>
              )}
            </td>

            <td className="border p-2">{car.name}</td>

            <td className="border p-2">{car.category}</td>

            <td className="border p-2">{car.seats}</td>

            <td className="border p-2">{car.fuelType}</td>

            <td className="border p-2">{car.transmission}</td>

            <td className="border p-2">
              <div className="flex gap-2">
                
                <EditCarButton  id={car.id} />

                <DeleteCarButton id={car.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}