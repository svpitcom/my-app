// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, origin, search } = request.nextUrl;

  // ถ้า path เริ่มด้วย /en หรือ /th แล้ว ให้ผ่านไปเลย
  if (pathname.startsWith("/en") || pathname.startsWith("/th")) {
    return NextResponse.next();
  }

  // ถ้า path เป็น static asset หรือ API route ให้ข้าม (ไม่ redirect)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // ป้องกันไฟล์ static: .png, .css, .js ฯลฯ
  ) {
    return NextResponse.next();
  }

  // redirect ไป /en + path เดิม + query string เดิม
  const url = new URL(`${origin}/en${pathname}${search}`);
  return NextResponse.redirect(url);
}

// ใช้กับทุก path ยกเว้น static assets (_next/...) และ public files
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
