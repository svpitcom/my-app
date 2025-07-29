import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["th", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

export default nextConfig;
