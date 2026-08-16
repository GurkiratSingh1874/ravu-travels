import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email: "admin@ravutravels.com",
    },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);

    await prisma.admin.create({
      data: {
        name: "RAVU Owner",
        email: "admin@ravutravels.com",
        password: hashedPassword,
      },
    });

    console.log("✅ Admin created.");
  } else {
    console.log("✅ Admin already exists.");
  }

  const testimonialCount = await prisma.testimonial.count();

  if (testimonialCount === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          name: "Aman Sharma",
          review:
            "Excellent service. Clean cars and professional drivers.",
          rating: 5,
        },
        {
          name: "Priya Verma",
          review:
            "Booked a Himachal tour. Everything was perfectly managed.",
          rating: 5,
        },
        {
          name: "Rahul Kapoor",
          review:
            "Very punctual and affordable. Highly recommended.",
          rating: 5,
        },
      ],
    });

    console.log("✅ Testimonials created.");
  } else {
    console.log("✅ Testimonials already exist.");
  }
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });