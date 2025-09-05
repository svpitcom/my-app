// context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type LangContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

const LanguageContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    // โหลดค่าจาก Cookie ถ้ามี
    const savedLang = Cookies.get("lang");
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: string) => {
    setLangState(newLang);
    Cookies.set("lang", newLang, { expires: 7 }); // เก็บ 7 วัน
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
