import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const { data, error } = await supabase
    .from("home")
    .select(`
      home_id,
      home_title_${lang},
      home_detail_01_${lang},
      home_detail_02_${lang},
      home_detail_03_${lang}
    `);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // แปลงข้อมูลให้ frontend ใช้งานง่าย
//   const formatted = data.map((item) => ({
//     id: item.home_id,
//     title: item[`home_title_${lang}`],
//     detail_01: item[`home_detail_01_${lang}`],
//     detail_02: item[`home_detail_02_${lang}`],
//     detail_03: item[`home_detail_03_${lang}`],
//   }));

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
