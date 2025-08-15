// app/api/ourcompany/route.ts
export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const fields = ["banner_id", `banner_title_${lang}`, `banner_detail_${lang}`];
  const selectFields = fields.join(", ");

  const { data, error } = await supabase.from("banner").select(selectFields);

  if (error) {
    console.error("Supabase select error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
