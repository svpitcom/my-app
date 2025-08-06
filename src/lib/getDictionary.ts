// lib/getDictionary.ts
import { supabase } from "./supabase";

export type Locale = "en" | "th";

export type Dictionary = Record<string, string>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const { data, error } = await supabase
    .from("translations")
    .select("key_name, value")
    .eq("locale", locale);

  if (error) {
    throw new Error(`Supabase error: ${error.message}`);
  }

  const dictionary: Dictionary = {};

  for (const item of data ?? []) {
    dictionary[item.key_name] = item.value;
  }

  return dictionary;
}
