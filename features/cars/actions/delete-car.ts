"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/auth-guard";

export async function deleteCarAction(id: string) {
  await requireAdmin();
  await prisma.car.delete({
    where: {
      id,
    },
  });

  // Refresh the /admin/cars page
  revalidatePath("/admin/cars");
}