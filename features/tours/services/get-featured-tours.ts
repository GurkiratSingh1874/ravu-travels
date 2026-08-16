import { prisma } from "@/lib/prisma";

export async function getFeaturedTours() {
  return prisma.tour.findMany({
    where: {
      featured: true,
    },
    include: {
      cars: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
}