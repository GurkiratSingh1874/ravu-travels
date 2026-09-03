import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle /admin/login alias cleanly
  if (pathname === "/admin/login" || pathname === "/admin/login/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const token = request.cookies.get("token")?.value;

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};