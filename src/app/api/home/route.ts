import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") === "th" ? "th" : "en";
    // field ที่เลือกตามภาษา
    const fields = [
      "home_id",
      `home_title_${lang}`,
      `home_detail_01_${lang}`,
      `home_detail_02_${lang}`,
      `home_detail_03_${lang}`,
    ].join(", ");
    // เพิ่ม FROM
    const [rows] = await db.query(`SELECT ${fields} FROM home_svp`);
    return NextResponse.json({ data: rows });
  } catch (err) {
    console.error("MySQL select error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const [result] = await db.query("INSERT INTO home_svp SET ?", [body]);

    return NextResponse.json({ data: result }, { status: 201 });
  } catch (err) {
    console.error("MySQL insert error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
