import { prisma } from "@/lib/prisma";

export async function getPublicTours() {
  return prisma.tour.findMany({
    include: {
      cars: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}