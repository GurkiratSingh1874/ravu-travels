"use server";

import { prisma } from "@/lib/prisma";

type CreateRecord = {
  customerName: string;
  phone: string;

  bookingType: string;

  tourName?: string;
  carName?: string;

  travelDate?: string;

  message: string;
};

export async function createRecord(data: CreateRecord) {
  await prisma.record.create({
    data: {
      customerName: data.customerName,
      phone: data.phone,

      bookingType: data.bookingType,

      tourName: data.tourName,
      carName: data.carName,

      travelDate: data.travelDate,

      message: data.message,
    },
  });

  return {
    success: true,
  };
}