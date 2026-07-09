"use client";

import { deleteTourAction } from "../actions/delete-tour";

type Props = {
  id: string;
};

export default function DeleteTourButton({ id }: Props) {
  async function handleDelete() {
    const ok = confirm("Delete this tour?");

    if (!ok) return;

    await deleteTourAction(id);

    window.location.reload();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
    >
      Delete
    </button>
  );
}