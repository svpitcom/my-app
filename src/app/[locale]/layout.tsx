// src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../[locale]/globals.css";
import { setRequestLocale } from "next-intl/server";
import { LanguageProvider, Locale } from "@/context/LanguageContext";

// ใช้ type LayoutProps ของ Next.js
interface Props {
  children: ReactNode;
  params: {
    locale: Locale; // union type "th" | "en"
  };
}

export const metadata = {
  title: {
    default: "SV Polymer Co., Ltd.",
    template: "%s | SV Polymer Co., Ltd.",
  },
};

// ❌ ห้าม async → return ReactNode ทันที
export default function RootLayout({ children, params }: Props) {
  const { locale } = params;

  // ตั้ง locale สำหรับ next-intl
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <LanguageProvider initialLang={locale}>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
