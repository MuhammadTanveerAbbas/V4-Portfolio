import type React from "react";
import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadtanveerabbas.vercel.app"),

  title: {
    default: "Muhammad Tanveer Abbas | SaaS Developer & MVP Builder",
    template: "%s | Muhammad Tanveer Abbas",
  },

  description:
    "Muhammad Tanveer Abbas is a SaaS Developer and MVP Builder helping early-stage founders in the USA, UK, and Europe validate ideas, build fast, and launch scalable SaaS products in 2–3 weeks.",

  keywords: [
    "Muhammad Tanveer Abbas",
    "SaaS Developer",
    "MVP Builder",
    "SaaS MVP Development",
    "Early Stage Founder",
    "Software Developer Pakistan",
    "Next.js Developer",
    "Full Stack SaaS Developer",
    "MVP Development for Startups",
    "SaaS for Founders",
    "Build SaaS fast",
    "Launch SaaS MVP",
    "Startup Developer",
    "Freelance SaaS Developer UK",
    "Freelance SaaS Developer USA",
    "SaaS Product Builder",
  ],

  authors: [{ name: "Muhammad Tanveer Abbas", url: "https://muhammadtanveerabbas.vercel.app" }],
  creator: "Muhammad Tanveer Abbas",
  publisher: "Muhammad Tanveer Abbas",

  alternates: {
    canonical: "https://muhammadtanveerabbas.vercel.app",
  },

  openGraph: {
    type: "profile",
    firstName: "Muhammad Tanveer",
    lastName: "Abbas",
    username: "MuhammadTanveerAbbas",
    gender: "male",
    url: "https://muhammadtanveerabbas.vercel.app",
    siteName: "Muhammad Tanveer Abbas",
    title: "Muhammad Tanveer Abbas | SaaS Developer & MVP Builder",
    description:
      "Helping early-stage founders validate ideas and launch SaaS MVPs in 2–3 weeks. Based globally, working with founders in USA, UK, and Europe.",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Tanveer Abbas — SaaS Developer & MVP Builder",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tanveer Abbas | SaaS Developer & MVP Builder",
    description:
      "Helping early-stage founders validate ideas and ship SaaS products fast.",
    creator: "@m_tanveerabbas", // ⚠️ Replace with real handle if different
    images: ["/OG.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "googlebdae41d34cb8b1e0",
    // bing: "REPLACE_WITH_BING_VERIFICATION_CODE",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_geistMono.variable} ${_playfair.variable}`}>
      <body className="font-mono antialiased">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
