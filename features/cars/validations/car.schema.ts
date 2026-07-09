import { z } from "zod";
import { CarCategory, Transmission } from "@prisma/client";

export const carSchema = z.object({
  name: z.string().min(2),
  category: z.nativeEnum(CarCategory),
  seats: z.number().min(2).max(30),
  fuelType: z.string().min(2),
  transmission: z.nativeEnum(Transmission),

  images: z.array(z.string()).min(1),

  isAvailable: z.boolean(),
});

export type CarSchema = z.infer<typeof carSchema>;