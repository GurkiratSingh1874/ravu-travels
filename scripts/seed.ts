import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email: "admin@ravutravels.com",
    },
  });

  if (existingAdmin) {
    console.log("Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.admin.create({
    data: {
      name: "RAVU Owner",
      email: "admin@ravutravels.com",
      password: hashedPassword,
    },
  });

  console.log("Admin created successfully.");
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
