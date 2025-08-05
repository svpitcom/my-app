import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../[locale]/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
