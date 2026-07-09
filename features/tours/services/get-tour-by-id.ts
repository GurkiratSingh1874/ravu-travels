import { prisma } from "@/lib/prisma";

export async function getTourById(id: string) {
  return prisma.tour.findUnique({
    where: {
      id,
    },
    include: {
      cars: true,
    },
  });
}