import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Build ผ่านแม้ type error
  },
  images: {
    domains: ["your-image-domain.com"], // ถ้ามีรูปจาก domain นอก
  },
};

export default nextConfig;
