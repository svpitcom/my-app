import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'th']; // ✅ ต้อง export ตัวแปรนี้
export const defaultLocale = 'en';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(en|th)/:path*']
};
