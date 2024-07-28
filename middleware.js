import { NextResponse, NextRequest } from "next/server";
export async function middleware(request) {
    const token = request?.cookies?.get("userId")?.value;
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!token) {
          const url = request.nextUrl.clone()
          url.pathname = '/login'
          return NextResponse.redirect(url)
        }
        return NextResponse.next();
    }
    if (request.nextUrl.pathname.startsWith("/login")) {
      if (token) {
        const url = request.nextUrl.clone()
        url.pathname = '/dashboard'
        return NextResponse.redirect(url)
      }
      return NextResponse.next();
  }
    return NextResponse.next();
}

