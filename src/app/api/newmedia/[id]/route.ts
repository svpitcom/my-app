import { NextResponse } from "next/server";
import Newmedia from "@/data/newmedia.json"; // ✅ เปิดการ import กลับมา

export async function GET(request: Request, context: unknown) {
  const ctx = context as { params: { id: string } };
  const id = parseInt(ctx.params.id, 10);

  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  // 🔍 ค้นหา media ที่ตรงกับ id
  const mediaItem = Newmedia.find((item) => item.id === id);

  if (!mediaItem) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  // ✅ ถ้าพบ item ก็ส่งกลับ
  return NextResponse.json(mediaItem);
}