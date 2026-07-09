"use client";

import { deleteCarAction } from "../actions/delete-car";

type Props = {
  id: string;
};

export default function DeleteCarButton({ id }: Props) {
  return (
    <button
      onClick={async () => {
        if (confirm("Delete this car?")) {
          await deleteCarAction(id);
        }
      }}
      className="rounded bg-red-500 px-3 py-1 text-white"
    >
      Delete
    </button>
  );
}