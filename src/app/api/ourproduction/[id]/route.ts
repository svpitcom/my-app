import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "th" ? "th" : "en";

  const fields = [
    "our_product_id",
    `our_product_title_${lang}`,
    `our_product_detail_01_${lang}`,
    `our_product_detail_02_${lang}`,
    `our_product_detail_03_${lang}`,
    `our_product_detail_04_${lang}`,
    `our_product_detail_05_${lang}`,
  ].join(", ");

  const [rows] = await db.query(
    `SELECT ${fields} FROM our_production_svp WHERE our_product_id = ? LIMIT 1`,
    [id]
  );

  if (!rows || rows.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ data: rows[0] });
}
