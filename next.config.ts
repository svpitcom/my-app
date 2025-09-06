import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Build ผ่านแม้ type error
  },
  //output: "export", // ให้ Next.js build เป็น static files
  images: {
    // ปิด optimizer ของ next/image
    domains: ["your-image-domain.com"], // ถ้ามีรูปจาก domain นอก
  },
};

export default nextConfig;
