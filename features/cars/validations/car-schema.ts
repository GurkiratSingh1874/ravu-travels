import { z } from "zod";
import { CarCategory, FuelType, Transmission } from "@prisma/client";

export const carSchema = z.object({
  name: z.string().min(2, "Car name is required."),

  category: z.nativeEnum(CarCategory),

  seats: z.number().min(1, "Seats must be at least 1."),

  fuelType: z.nativeEnum(FuelType),

  transmission: z.nativeEnum(Transmission),
});

export type CarSchema = z.infer<typeof carSchema>;