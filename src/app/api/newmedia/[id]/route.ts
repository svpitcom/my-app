import { NextResponse } from "next/server";
import Newmedia from "@/data/newmedia.json";

export async function GET(req: Request, context: { params: { id: string } }) {
  // ✅ ดึง params โดยรอ await ถ้าจำเป็น
  const { id } = await context.params;

  const parsedId = parseInt(id, 10);
  const item = Newmedia.find((p) => p.id === parsedId);

  if (!item) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
