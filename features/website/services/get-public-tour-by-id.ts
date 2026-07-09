import { prisma } from "@/lib/prisma";

export async function getPublicTourById(id: string) {
  return prisma.tour.findUnique({
    where: {
      id,
    },
    include: {
      cars: true,
    },
  });
}