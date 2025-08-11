export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

// GET by ID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const fields = [
    "new_csr_id",
    `new_csr_header_${lang}`,
    `new_csr_title_${lang}`,
    `new_csr_bt_${lang}`,
    `new_csr_detail_${lang}`,
    `new_csr_img`,
    `new_csr_img_01`,
    `new_csr_img_02`,
    `new_csr_img_03`,
    `new_csr_img_04`,
  ];
  const selectFields = fields.join(", ");

  const { data, error } = await supabase
    .from("new_csr")
    .select(selectFields)
    .eq("new_csr_id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
