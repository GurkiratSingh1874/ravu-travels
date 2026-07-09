"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  CarCategory,
  FuelType,
  Transmission,
} from "@prisma/client";
import { redirect } from "next/navigation";

export async function updateCarAction(
  id: string,
  formData: FormData
) {
  await prisma.car.update({
    where: {
      id,
    },
    data: {
      name: formData.get("name") as string,
      category: formData.get("category") as CarCategory,
      seats: Number(formData.get("seats")),
      fuelType: formData.get("fuelType") as FuelType,
      transmission: formData.get("transmission") as Transmission,
      images: formData.getAll("images") as string[],
    },
  });

  revalidatePath("/admin/cars");
  redirect("/admin/cars");
}