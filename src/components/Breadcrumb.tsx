// components/Breadcrumb.tsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbNameMap: { [key: string]: string } = {
  "about": "เกี่ยวกับเรา",
  "policy": "นโยบาย",
  "greenhousegas": "จัดการก๊าซเรือนกระจก",
  "contactus": "ติดต่อเรา",
  "ourproduct": "สินค้า",
};

export default function Breadcrumb() {
  const pathname = usePathname(); // เช่น "/policy/greenhousegas"
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 mb-6" aria-label="breadcrumb">
      <ol className="flex items-center flex-wrap gap-x-1">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">หน้าแรก</Link>
        </li>
        {pathParts.map((part, index) => {
          const href = "/" + pathParts.slice(0, index + 1).join("/");
          const label = breadcrumbNameMap[part.toLowerCase()] || part;
          const isLast = index === pathParts.length - 1;

          return (
            <li key={href} className="flex items-center gap-x-1">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold">{label}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
