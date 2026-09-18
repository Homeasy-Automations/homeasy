export default function robots() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://www.homeasy.io'
  ).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/crm',
          '/login',
          '/signup',
          '/api/',
          '/_next/',
          '/icon/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
