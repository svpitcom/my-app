// app/[locale]/layout.tsx

import type { Locale } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  return (
    <html lang={locale}>
      <body>
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
