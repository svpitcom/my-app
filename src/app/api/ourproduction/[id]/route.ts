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
    "our_production_id",
    `our_production_title_${lang}`,
    `our_production_detail_01_${lang}`,
    `our_production_detail_02_${lang}`,
    `our_production_detail_03_${lang}`,
    `our_production_detail_04_${lang}`,
    `our_production_detail_05_${lang}`,
  ];
  const selectFields = fields.join(", ");

  const { data, error } = await supabase
    .from("our_production")
    .select(selectFields)
    .eq("our_production_id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}