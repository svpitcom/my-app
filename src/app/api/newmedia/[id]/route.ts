import { NextResponse } from "next/server";
import Newmedia from "@/data/newmedia.json";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id, 10);
  const item = Newmedia.find((p) => p.id === id);

  if (!item) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
