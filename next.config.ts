/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./", // สำหรับ GitHub Pages
  images: {
    unoptimized: true, // เพราะ next/image ต้องใช้ static
  },
};

export default nextConfig;
