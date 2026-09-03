"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth-guard";

export async function deleteTourAction(id: string) {
  await requireAdmin();
  await prisma.tour.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/tours");
}