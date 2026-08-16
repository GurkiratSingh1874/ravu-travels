import { prisma } from "@/lib/prisma";

export async function getContactQueries() {
  return prisma.contactQuery.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}