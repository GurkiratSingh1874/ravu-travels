import { prisma } from "@/lib/prisma";

export async function getCars() {
  return prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}