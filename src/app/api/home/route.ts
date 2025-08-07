import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const fields = [
    "home_id",
    `home_title_${lang}`,
    `home_detail_01_${lang}`,
    `home_detail_02_${lang}`,
    `home_detail_03_${lang}`,
  ];
  const selectFields = fields.join(", ");

  const { data, error } = await supabase.from("home").select(selectFields);

  if (error) {
    console.error("Supabase select error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await supabase.from("home").insert([body]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    console.error("Request parse error:", err);
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
