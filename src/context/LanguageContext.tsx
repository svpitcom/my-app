// context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type Language = "th" | "en";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: "th",
  setLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>("th");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
