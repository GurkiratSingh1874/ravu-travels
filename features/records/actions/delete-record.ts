"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteRecord(id: string) {
  await prisma.record.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/records");
}