"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  CarCategory,
  FuelType,
  Transmission,
} from "@prisma/client";

import { requireAdmin } from "@/lib/auth-guard";

export async function createCarAction(formData: FormData) {
  await requireAdmin();
  await prisma.car.create({
    data: {
      name: formData.get("name") as string,
      category: formData.get("category") as CarCategory,
      seats: Number(formData.get("seats")),
      fuelType: formData.get("fuelType") as FuelType,
      transmission: formData.get("transmission") as Transmission,
      images: formData.getAll("images") as string[],
      isAvailable: true,
    },
  });

  revalidatePath("/admin/cars");
}