import { NextResponse } from "next/server";
import Newmedia from "@/data/newmedia.json";

export async function GET(request: Request, context: unknown) {
  // context.params เป็น object ที่ Next.js ให้มา
  const ctx = context as { params: { id: string } };
  const id = parseInt(ctx.params.id, 10);

  if (!id) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(id);
}
