export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET by ID (MySQL)
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
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

    // ✅ Query
    const [rows] = await db.query(
      `SELECT ${fields} 
       FROM our_production_svp 
       WHERE our_product_id = ? 
       LIMIT 1`,
      [id]
    );

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ data: rows[0] });
  } catch (error: any) {
    console.error("MySQL query error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
