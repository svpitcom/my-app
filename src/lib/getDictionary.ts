//Get Dictionary.ts

import type { Locale } from "@/types/index";
import en from "@/dictionaries/en.json";
import th from "@/dictionaries/th.json";

export function getDictionary(locale: Locale) {
  return locale === "en" ? en : th;
}
