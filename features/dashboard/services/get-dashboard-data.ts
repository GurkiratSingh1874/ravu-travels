import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  const totalCars = await prisma.car.count();

  const totalTours = await prisma.tour.count();

  const featuredTours = await prisma.tour.count({
    where: {
      featured: true,
    },
  });

  const recentCars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  const recentTours = await prisma.tour.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return {
    totalCars,
    totalTours,
    featuredTours,
    recentCars,
    recentTours,
  };
}