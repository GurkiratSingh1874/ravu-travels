"use client";

import { Trash2 } from "lucide-react";
import { deleteRecord } from "../actions/delete-record";
import { useTransition } from "react";
import { toast } from "react-hot-toast";

type Record = {
  id: string;
  customerName: string;
  phone: string;
  bookingType: string;
  tourName: string | null;
  carName: string | null;
  travelDate: string | null;
  createdAt: Date;
};

type Props = {
  records: Record[];
};

export default function RecordsTable({
  records,
}: Props) {
  const [pending, startTransition] = useTransition();

  function handleDelete(id: string) {
    if (!confirm("Delete this record?")) return;

    startTransition(async () => {
      await deleteRecord(id);
      toast.success("Record deleted.");
    });
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Tour</th>
            <th className="p-4 text-left">Car</th>
            <th className="p-4 text-left">Travel Date</th>
            <th className="p-4 text-left">Received</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr
              key={record.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4 font-medium">
                {record.customerName}
              </td>

              <td className="p-4">
                {record.phone}
              </td>

              <td className="p-4">
                {record.bookingType}
              </td>

              <td className="p-4">
                {record.tourName || "-"}
              </td>

              <td className="p-4">
                {record.carName || "-"}
              </td>

              <td className="p-4">
                {record.travelDate || "-"}
              </td>

              <td className="p-4">
                {new Date(
                  record.createdAt
                ).toLocaleString()}
              </td>

              <td className="p-4 text-center">
                <button
                  disabled={pending}
                  onClick={() =>
                    handleDelete(record.id)
                  }
                  className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}

          {records.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="p-10 text-center text-gray-500"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}