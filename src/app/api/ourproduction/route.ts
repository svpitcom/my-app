import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") === "th" ? "th" : "en";

    // ✅ กำหนด fields ตามภาษา
    const fields = [
      "our_product_id",
      `our_product_title_${lang}`,
      `our_product_detail_01_${lang}`,
      `our_product_detail_02_${lang}`,
      `our_product_detail_03_${lang}`,
      `our_product_detail_04_${lang}`,
      `our_product_detail_05_${lang}`,
    ].join(", ");

    // ✅ SQL Query
    const [rows] = await db.query(
      `SELECT ${fields} 
       FROM our_production_svp 
       ORDER BY our_product_id ASC`
    );

    // ✅ ตรวจสอบ rows ว่าเป็น array จริง
    const data = Array.isArray(rows) ? rows : [];

    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("MySQL query error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
