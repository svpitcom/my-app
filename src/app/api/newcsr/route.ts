// app/api/ourcompany/route.ts
export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const fields = [
    "new_csr_id",
    `new_csr_header_${lang}`,
    `new_csr_title_${lang}`,
    `new_csr_bt_${lang}`,
    `new_csr_detail_${lang}`,
    `new_csr_img`,
  ];
  const selectFields = fields.join(", ");

  const { data, error } = await supabase.from("new_csr").select(selectFields);

  if (error) {
    console.error("Supabase select error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
