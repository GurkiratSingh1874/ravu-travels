import { prisma } from "@/lib/prisma";

export async function getRecords() {
  return prisma.record.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}