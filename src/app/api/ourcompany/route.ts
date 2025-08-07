// app/api/ourcompany/route.ts
export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const fields = [
    "our_company_id",
    `our_company_title_${lang}`,
    `our_company_detail_01_${lang}`,
    `our_company_detail_02_${lang}`,
    `our_company_detail_03_${lang}`,
    `our_company_detail_04_${lang}`,
    `our_company_detail_05_${lang}`,
    `our_company_detail_06_${lang}`,
  ];
  const selectFields = fields.join(", ");

  const { data, error } = await supabase
    .from("our_company")
    .select(selectFields);

  if (error) {
    console.error("Supabase select error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
