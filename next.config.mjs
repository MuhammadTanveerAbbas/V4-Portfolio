/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

/*
  Content Security Policy.
  - Next.js injects inline bootstrap scripts, so script-src needs 'unsafe-inline'.
    'unsafe-eval' and websocket connections are only added in development, where
    the dev server needs them.
  - Vercel Analytics loads from va.vercel-scripts.com and reports to
    vitals.vercel-insights.com.
  - The contact form posts directly to api.web3forms.com.
  - WebGL, self hosted fonts and images all stay on 'self'.
*/
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' https://api.web3forms.com https://vitals.vercel-insights.com${
    isDev ? " ws: http://localhost:*" : ""
  }`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.web3forms.com",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
  /*
    Legacy project slugs from the previous version of this site. They redirect
    instead of returning 404 for anyone who still has an old link.
  */
  async redirects() {
    return [
      { source: "/work/clario-hub", destination: "/work/clario", permanent: true },
      { source: "/work/kanbi-board", destination: "/work", permanent: true },
      { source: "/work/subsight-tracker", destination: "/work", permanent: true },
      { source: "/work/keyping", destination: "/work", permanent: true },
      { source: "/work/readlyn", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
