// app/api/ourcompany/route.ts
export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
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
    // เพิ่ม FROM
    const [rows] = await db.query(`SELECT ${fields} FROM new_csr_svp`);
    return NextResponse.json({ data: rows });
  } catch (err: any) {
    console.error("Supabase select error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
