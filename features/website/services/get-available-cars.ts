import { prisma } from "@/lib/prisma";

export async function getAvailableCars() {
  return prisma.car.findMany({
    where: {
      isAvailable: true,
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });
}