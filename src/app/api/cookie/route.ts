import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// ✅ Set Cookie
export async function POST() {
  const res = NextResponse.json({ message: "Cookie set!" });
  res.cookies.set("myCookie", "hello-world", {
    httpOnly: true, // JS ฝั่ง client อ่านไม่ได้ (ปลอดภัย)
    secure: true, // ใช้กับ HTTPS เท่านั้น
    sameSite: "lax", // ป้องกัน CSRF เบื้องต้น
    path: "/",
    maxAge: 60 * 60 * 24,
  });
  return res;
}
// Get Cookie
export async function GET() {
  // await cookies() เพราะมันเป็น Promise
  const cookieStore = await cookies();
  const cookie = cookieStore.get("myCookie");

  return NextResponse.json({ cookie: cookie?.value ?? null });
}

// ✅ Delete Cookie
export async function DELETE() {
  const res = NextResponse.json({ message: "Cookie deleted!" });
  res.cookies.delete("myCookie");
  return res;
}
