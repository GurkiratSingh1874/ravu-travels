"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-guard";

export async function updateTourAction(
  id: string,
  formData: FormData
) {
  await requireAdmin();
  const carIds = formData.getAll("cars") as string[];

  await prisma.tour.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      days: Number(formData.get("days")),
      nights: Number(formData.get("nights")),
      coverImage: formData.get("coverImage") as string,
      gallery: formData.getAll("gallery") as string[],
      featured: formData.get("featured") === "true",

      cars: {
        set: [],
        connect: carIds.map((id) => ({ id })),
      },
    },
  });

  revalidatePath("/admin/tours");
  redirect("/admin/tours");
}