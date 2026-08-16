import { prisma } from "@/lib/prisma";

export async function getDashboardStats() {
  const cars = await prisma.car.count();

  const tours = await prisma.tour.count();

  const featuredTours = await prisma.tour.count({
    where: {
      featured: true,
    },
  });

  return {
    cars,
    tours,
    featuredTours,
  };
}