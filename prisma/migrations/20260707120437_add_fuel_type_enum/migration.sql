/*
  Warnings:

  - Changed the type of `fuelType` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('PETROL', 'DIESEL', 'CNG', 'ELECTRIC', 'HYBRID');

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "fuelType",
ADD COLUMN     "fuelType" "FuelType" NOT NULL;
