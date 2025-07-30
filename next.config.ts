// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // เอา serverActions ออกถ้าไม่ได้ใช้
  },
  eslint: {
    ignoreDrringBuilds: true,
  },
};

export default nextConfig;
