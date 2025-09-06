// src/app/[locale]/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../[locale]/globals.css";
import { setRequestLocale } from "next-intl/server";
import { LanguageProvider } from "@/context/LanguageContext";

export type Locale = "th" | "en";

interface Props {
  children: React.ReactNode;
  params: { locale: string }; // ต้องเป็น object ไม่ใช่ Promise
}

export const metadata = {
  title: {
    default: "SV Polymer Co., Ltd.",
    template: "%s | SV Polymer Co., Ltd.",
  },
};

// ✅ เปลี่ยนเป็น synchronous
export default function RootLayout({ children, params }: Props) {
  const { locale } = params;

  setRequestLocale(locale); // ถ้าไม่ใช่ async ก็ต้อง sync version

  return (
    <html lang={locale}>
      <body>
        <LanguageProvider initialLang={locale as Locale}>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
