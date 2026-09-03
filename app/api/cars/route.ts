import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCar } from "@/features/cars/services/car.services";
import { carSchema } from "@/features/cars/validations/car-schema";
import { successResponse } from "@/lib/api-response";
import { handleApiError } from "@/lib/api-error";

import { getAdminSession } from "@/lib/auth-guard";

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Admin session required." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const validatedData = carSchema.parse(body);

    const car = await createCar(validatedData);

    return successResponse(car, "Car created successfully.");
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return successResponse(cars);
  } catch (error) {
    return handleApiError(error);
  }
}