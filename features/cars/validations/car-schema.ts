import { z } from "zod";

export const carSchema = z.object({
  name: z.string().min(2, "Car name is required."),

  category: z.string().min(1, "Select a category."),

  seats: z.number().min(1, "Seats must be at least 1."),

  fuelType: z.string().min(1, "Select fuel type."),

  transmission: z.string().min(1, "Select transmission."),
});