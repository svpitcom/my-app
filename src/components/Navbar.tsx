"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { key: "Home", path: "" },
  { key: "OurCompany", path: "OurCompany" },
  { key: "OurProduct", path: "OurProduct" },
  { key: "Policy", path: "Policy" },
  { key: "NewMedia", path: "NewMedia" },
  { key: "JobOpportunity", path: "JobOpportunity" },
  { key: "ContactUs", path: "ContactUs" },
];

const menuLabels: Record<string, Record<string, string>> = {
  en: {
    Home: "Home",
    OurCompany: "Our Company",
    OurProduct: "Our Product",
    Policy: "Policy",
    NewMedia: "New Media",
    JobOpportunity: "Careers",
    ContactUs: "Contact Us",
  },
  th: {
    Home: "หน้าหลัก",
    OurCompany: "เกี่ยวกับเรา",
    OurProduct: "ผลิตภัณฑ์",
    Policy: "นโยบาย",
    NewMedia: "สื่อใหม่",
    JobOpportunity: "ร่วมงานกับเรา",
    ContactUs: "ติดต่อเรา",
  },
};

type NavbarProps = {
  locale: string; // หรือ Locale ถ้า import ได้
};

export default function Navbar({ locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) || "en";
  const [selected, setSelected] = useState(currentLocale);

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle locale change
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setSelected(newLocale);

    // ปรับ path โดยเปลี่ยนแค่ locale ส่วนแรก
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "th") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  const linkColor = isScrolled ? "text-sky-600" : "text-white";
  const selectBg = isScrolled
    ? "bg-white text-sky-600"
    : "bg-white/20 text-white";

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

        {/* Desktop Nav */}
        <nav className={`hidden md:flex space-x-4 ${linkColor}`}>
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}/${item.path}`}
              className="font-bold text-lg hover:text-sky-400"
            >
              {menuLabels[currentLocale]?.[item.key] ?? item.key}
            </Link>
          ))}

          <select
            value={selected}
            onChange={handleChange}
            className={`font-bold text-lg ${selectBg} hover:text-sky-400 backdrop-blur-md px-2 py-1 rounded`}
          >
            <option className="text-sky-700" value="en">
              ENG
            </option>
            <option className="text-sky-700" value="th">
              TH
            </option>
          </select>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle navigation menu"
          aria-label="Toggle navigation menu"
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 p-4 bg-white/0 backdrop-blur-md shadow">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}/${item.path}`}
              className={`${linkColor} font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {menuLabels[currentLocale]?.[item.key] ?? item.key}
            </Link>
          ))}
          <select
            value={selected}
            onChange={handleChange}
            className={`mt-2 ${selectBg} font-medium px-2 py-1 rounded`}
          >
            <option value="en">ENG</option>
            <option value="th">TH</option>
          </select>
        </nav>
      )}
    </header>
  );
}
