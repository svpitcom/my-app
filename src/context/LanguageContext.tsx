// src/context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

// กำหนด type ภาษา
export type Locale = "th" | "en";

// Context type
interface LangContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
}

// สร้าง Context
const LanguageContext = createContext<LangContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  initialLang: Locale; // รับค่าภาษาเริ่มต้นจาก layout
}

export function LanguageProvider({ children, initialLang }: Props) {
  const [lang, setLangState] = useState<Locale>(initialLang);

  // โหลดจาก cookie ถ้ามี
  useEffect(() => {
    const savedLang = Cookies.get("lang") as Locale | undefined;
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Locale) => {
    setLangState(newLang);
    Cookies.set("lang", newLang, { expires: 7 });
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook สำหรับใช้งานใน component
export function useLanguage(): LangContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
