import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get("lang") === "th" ? "th" : "en";

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    // fields ตามภาษาที่เลือก
    const fields = [
      "new_csr_id",
      `new_csr_header_${lang}`,
      `new_csr_title_${lang}`,
      `new_csr_bt_${lang}`,
      `new_csr_detail_${lang}`,
      "new_csr_img",
      "new_csr_img_01",
      "new_csr_img_02",
      "new_csr_img_03",
      "new_csr_img_04",
      "new_csr_img_05",
    ].join(", ");

    const [rows] = await db.query(
      `SELECT ${fields} FROM new_csr_svp WHERE new_csr_id = ? LIMIT 1`,
      [id]
    );

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // rows[0] เป็น object record
    return NextResponse.json({ data: rows[0] });
  } catch (err) {
    console.error("MySQL select error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
