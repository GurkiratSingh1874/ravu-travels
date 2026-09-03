import { getRecords } from "@/features/records/services/get-records";
import RecordsTable from "@/features/records/components/records-table";

export default async function RecordsPage() {
  const records = await getRecords();

  return (
    <div className="max-w-7xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Booking Records</h1>
        <p className="text-sm text-slate-500 mt-1">All received bookings — One Way, Round Trip and Tours.</p>
      </div>

      <RecordsTable records={records} />
    </div>
  );
}