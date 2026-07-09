"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export default function EditTourButton({ id }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/admin/tours/${id}`)}
      className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
    >
      Edit
    </button>
  );
}