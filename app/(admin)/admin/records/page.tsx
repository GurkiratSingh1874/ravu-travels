import { getRecords } from "@/features/records/services/get-records";
import RecordsTable from "@/features/records/components/records-table";

export default async function RecordsPage() {
  const records = await getRecords();

  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Booking Records
      </h1>

      <RecordsTable records={records} />
    </div>
  );
}