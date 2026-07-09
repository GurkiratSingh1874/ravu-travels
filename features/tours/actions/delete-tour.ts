"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTourAction(id: string) {
  await prisma.tour.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/tours");
}