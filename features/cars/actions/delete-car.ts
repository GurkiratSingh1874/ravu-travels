"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCarAction(id: string) {
  await prisma.car.delete({
    where: {
      id,
    },
  });

  // Refresh the /admin/cars page
  revalidatePath("/admin/cars");
}