/*
  Warnings:

  - The `status` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `tripType` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `transmission` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TripType" AS ENUM ('TOUR', 'ONE_WAY', 'ROUND_TRIP');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CarCategory" AS ENUM ('SEDAN', 'SUV', 'MUV', 'HATCHBACK', 'LUXURY', 'TEMPO_TRAVELLER');

-- CreateEnum
CREATE TYPE "Transmission" AS ENUM ('MANUAL', 'AUTOMATIC');

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "tripType",
ADD COLUMN     "tripType" "TripType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "category",
ADD COLUMN     "category" "CarCategory" NOT NULL,
DROP COLUMN "transmission",
ADD COLUMN     "transmission" "Transmission" NOT NULL;
