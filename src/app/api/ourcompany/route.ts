export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") === "th" ? "th" : "en";

    const fields = [
      "our_company_id",
      `our_company_title_${lang}`,
      `our_company_subtitle_${lang}`,
      `our_company_detail_01_${lang}`,
      `our_company_detail_02_${lang}`,
      `our_company_detail_03_${lang}`,
      `our_company_detail_04_${lang}`,
      `our_company_detail_05_${lang}`,
      `our_company_detail_06_${lang}`,
    ];
    const selectFields = fields.join(", ");

    // ✅ Query MySQL
    const [rows] = await db.query(`SELECT ${selectFields} FROM our_company_svp`);

    return NextResponse.json({ data: rows });
  } catch (error) {
    console.error("MySQL error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
