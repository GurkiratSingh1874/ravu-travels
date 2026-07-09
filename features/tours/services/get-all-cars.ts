import { prisma } from "@/lib/prisma";

export async function getAllCars() {
  return prisma.car.findMany({
    orderBy: {
      name: "asc",
    },
  });
}