import { ZodError } from "zod";
import { errorResponse } from "./api-response";

export function handleApiError(error: unknown) {
  if (error instanceof ZodError) {
    return errorResponse(error.issues[0].message, 400);
  }

  console.error(error);

  return errorResponse();
}