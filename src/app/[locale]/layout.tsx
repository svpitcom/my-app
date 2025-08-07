import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../[locale]/globals.css";
import { setRequestLocale } from "next-intl/server";
import { LanguageProvider } from "@/context/LanguageContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export const metadata = {
  title: {
    default: "SV Polymer Co., Ltd.",
    template: "%s | SV Polymer Co., Ltd.",
  },
  description: "ผู้ผลิตและจำหน่ายผลิตภัณฑ์โพลิเมอร์ในประเทศไทย",
  keywords: [
    "SV Polymer",
    "พลาสติก",
    "โพลิเมอร์",
    "โรงงาน",
    "บริษัท",
    "ผลิตภัณฑ์",
  ],
  openGraph: {
    title: "SV Polymer Co., Ltd.",
    description: "ผู้ผลิตและจำหน่ายผลิตภัณฑ์โพลิเมอร์ในประเทศไทย",
    url: "https://sv-polymer.com",
    siteName: "SV Polymer Co., Ltd.",
    locale: "en_EN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export type Locale = "th" | "en";

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
