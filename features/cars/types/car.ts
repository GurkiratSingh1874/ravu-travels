import {
  CarCategory,
  Transmission,
  FuelType,
} from "@prisma/client";

export interface CarFormData {
  name: string;
  category: CarCategory;
  seats: number;
  fuelType: FuelType;
  transmission: Transmission;
}