"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { getDictionary } from "@/lib/getDictionary"; // <- import function
// import type { Locale } from "@/types/index";

const menuItems = [
  { key: "Home", path: "" },
  { key: "OurCompany", path: "OurCompany" },
  { key: "OurProduct", path: "OurProduct" },
  { key: "Policy", path: "Policy" },
  { key: "NewMedia", path: "NewMedia" },
  { key: "JobOpportunity", path: "JobOpportunity" },
  { key: "ContactUs", path: "ContactUs" },
];

// type NavbarProps = {
//   locale: Locale;
// };
// { locale }: NavbarProps

// { locale }: any

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const [dictionary, setDictionary] = useState<any>(null);

  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();
  // const currentLocale = (params.locale as string) || locale;
  // const [selected, setSelected] = useState(currentLocale);

  // ✅ โหลด dictionary ตาม locale
  // useEffect(() => {
  //   const load = async () => {
  //     const dict = await getDictionary(selected as Locale);
  //     setDictionary(dict);
  //   };
  //   load();
  // }, [selected]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // setSelected(newLocale);

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

  // if (!dictionary) return null; // ✅ wait for dictionary to load

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/0 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <Link href={`/`}>
          {/* ${currentLocale} */}
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
            // ${currentLocale}/
            <Link
              key={item.key}
              href={`/${item.path}`}
              className="font-bold text-lg hover:text-sky-400"
            >
              {/* dictionary.nav */}
              {item.key}
              {/* [item.key] ??  */}
            </Link>
          ))}

          <select
            // value={selected}
            onChange={handleChange}
            className={`font-bold text-lg ${selectBg} hover:text-sky-400 backdrop-blur-md px-2 py-1 rounded`}
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
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-2 p-4 bg-white/0 backdrop-blur-md shadow">
          {menuItems.map((item) => (
            // ${currentLocale}
            <Link
              key={item.key}
              href={`/${item.path}`}
              className={`${linkColor} font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {/* dictionary.nav */}
              {item.key}
              {/* [item.key] ?? */}
            </Link>
          ))}
          <select
            // value={selected}
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
