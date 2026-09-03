import { prisma } from "@/lib/prisma";
import { CarCategory, FuelType, Transmission } from "@prisma/client";
import { carSchema } from "../validations/car-schema";
import { z } from "zod";

type CarSchema = z.infer<typeof carSchema>;

export async function createCar(data: CarSchema) {
  return prisma.car.create({
    data: {
      ...data,
      category: data.category as CarCategory,
      fuelType: data.fuelType as FuelType,
      transmission: data.transmission as Transmission,
    },
  });
}
