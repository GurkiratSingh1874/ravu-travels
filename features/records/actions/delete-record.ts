"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth-guard";

export async function deleteRecord(id: string) {
  await requireAdmin();
  await prisma.record.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/records");
}