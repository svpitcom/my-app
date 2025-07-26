import { NextResponse } from "next/server";
import Newmedia from "@/data/newmedia.json";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, context: Params) {
  const id = parseInt(context.params.id, 10);
  const newmedia = Newmedia.find((p) => p.id === id);

  if (!newmedia) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(newmedia);
}
