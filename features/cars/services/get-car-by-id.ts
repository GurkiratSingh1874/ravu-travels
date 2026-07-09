import { prisma } from "@/lib/prisma";

export async function getCarById(id: string) {
  return prisma.car.findUnique({
    where: {
      id,
    },
  });
}