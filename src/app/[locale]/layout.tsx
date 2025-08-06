import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../[locale]/globals.css";
import { setRequestLocale } from "next-intl/server";
// import { Locale } from "next-intl";
import { ReactNode } from "react";
// import {routing} from '@/i18n/routing';

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
  // const t = await getTranslations({ locale: params.locale });
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
