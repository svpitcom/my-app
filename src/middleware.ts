// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["th", "en"];
const defaultLocale = "th";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ข้าม static, API, favicon, และเส้นทางที่มี locale อยู่แล้ว
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/assets") ||  // เพิ่มบรรทัดนี้
    locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next();
  }

  // redirect ไปยัง default locale
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
}

// 👇 แก้ตรงนี้ให้ matcher รวม '/' ชัดเจน
export const config = {
  matcher: ["/", "/((?!_next|api|favicon.ico).*)"],
};
