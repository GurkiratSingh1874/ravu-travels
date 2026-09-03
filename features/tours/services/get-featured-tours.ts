import { prisma } from "@/lib/prisma";

export async function getFeaturedTours() {
  if (!process.env.DATABASE_URL) {
    return [];
  }

  try {
    return await prisma.tour.findMany({
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
  } catch (error) {
    if (error instanceof Error && error.name === "PrismaClientInitializationError") {
      return [];
    }
    throw error;
  }
}
