import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") || "en";

  const { data, error } = await supabase
    .from("translations")
    .select(`key, ${lang}`);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const dictionary = data.reduce((acc, item) => {
    acc[item.key] = item[lang];
    return acc;
  }, {} as Record<string, string>);

  return NextResponse.json({ dictionary });
}
