import { prisma } from "@/lib/prisma";
import { CarSchema } from "../validations/car-schema";

export async function createCar(data: CarSchema) {
  return prisma.car.create({
    data,
  });
}