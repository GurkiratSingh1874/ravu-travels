import { NextResponse } from "next/server";

export function successResponse(data: unknown, message = "Success") {
  return NextResponse.json({
    success: true,
    message,
    data,
  });
}

export function errorResponse(
  message = "Something went wrong",
  status = 500
) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status }
  );
}