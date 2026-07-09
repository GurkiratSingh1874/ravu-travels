import { prisma } from "@/lib/prisma";

export async function getTours() {
  return prisma.tour.findMany({
    include: {
      cars: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}