"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";

type Locale = "en" | "th";
type MenuKey =
  | "Home"
  | "OurCompany"
  | "OurProduct"
  | "Policy"
  | "NewCSR"
  | "JobOpportunity"
  | "ContactUs";

const dict: Record<Locale, Record<MenuKey, string>> = {
  en: {
    Home: "Home",
    OurCompany: "Our Company",
    OurProduct: "Our Product",
    Policy: "Policy",
    NewCSR: "New&CSR",
    JobOpportunity: "Job Opportunity",
    ContactUs: "Contact Us",
  },
  th: {
    Home: "หน้าแรก",
    OurCompany: "เกี่ยวกับบริษัท",
    OurProduct: "ผลิตภัณฑ์ของเรา",
    Policy: "นโยบาย",
    NewCSR: "ข่าวและกิจกรรม",
    JobOpportunity: "ร่วมงานกับเรา",
    ContactUs: "ติดต่อเรา",
  },
};

const menuItems: { key: MenuKey; path: string }[] = [
  { key: "Home", path: "" },
  { key: "OurCompany", path: "OurCompany" },
  { key: "OurProduct", path: "OurProduct" },
  { key: "Policy", path: "Policy" },
  { key: "NewCSR", path: "NewCSR" },
  { key: "JobOpportunity", path: "JobOpportunity" },
  { key: "ContactUs", path: "ContactUs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  // ตรวจหา locale ปัจจุบันจาก pathname
  const currentLocale = useMemo<Locale>(() => {
    const segments = pathname.split("/");
    // console.log(segments)
    if (segments[1] === "th" || segments[1] === "en") {
      return segments[1];
    }
    return "en";
  }, [pathname]);
  // sync lang context กับ currentLocale
  useEffect(() => {
    if (lang !== currentLocale) {
      setLang(currentLocale as "th" | "en");
    }
  }, [currentLocale, lang, setLang]);
  // เปลี่ยน URL ตาม locale และ update context
  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    if (["en", "th"].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join("/") || "/";
    setLang(newLocale as "th" | "en");
    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = isScrolled ? "text-sky-600" : "text-white";
  const selectClass = `font-bold text-lg ${
    isScrolled ? "bg-white text-sky-600" : "bg-white/20 text-white"
  } hover:text-sky-400 backdrop-blur-md px-2 py-1 rounded`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/0 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <Link href={`/${currentLocale}`}>
          <Image
            src={
              isScrolled
                ? "/assets/imgs/SVP-Logo.png"
                : "/assets/imgs/LOGO_SVP_White.png"
            }
            alt="Company Logo"
            width={240}
            height={240}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden md:flex space-x-4 ${linkColor}`}>
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}/${item.path}`}
              className="font-bold text-lg hover:text-sky-400"
            >
              {dict[currentLocale][item.key]}
            </Link>
          ))}
          <select
            value={currentLocale}
            onChange={(e) => changeLocale(e.target.value)}
            className={selectClass}
            aria-label="Select language"
          >
            <option value="en">ENG</option>
            <option value="th">TH</option>
          </select>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`w-6 h-1 transition-all duration-300 ${
                isScrolled ? "bg-sky-600" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 p-4 bg-sky-50/10 backdrop-blur-md shadow">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}/${item.path}`}
              className={`${linkColor} font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {dict[currentLocale][item.key]}
            </Link>
          ))}
          <select
            value={currentLocale}
            onChange={(e) => {
              changeLocale(e.target.value);
              setIsOpen(false);
            }}
            className={`mt-2 ${selectClass}`}
          >
            <option value="en">ENG</option>
            <option value="th">TH</option>
          </select>
        </nav>
      )}
    </header>
  );
}
