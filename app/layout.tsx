import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Muhammad Tanveer Abbas",
    "Software Developer",
    "Business Software Developer",
    "Custom Software Development",
    "B2B Software",
    "Internal Tools",
    "Workflow Automation",
    "SaaS Development",
    "Web Application Development",
    "Full Stack Developer",
    "Software Developer Pakistan",
  ],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    type: "profile",
    firstName: "Muhammad Tanveer",
    lastName: "Abbas",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Muhammad Tanveer Abbas builds practical business software and SaaS products for B2B companies: internal tools, customer applications, workflow systems and AI assisted products.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Practical business software and SaaS products for B2B companies.",
    creator: "@m_tanveerabbas",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body id="top" className="font-mono antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-110 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:uppercase focus:text-black"
        >
          Skip to content
        </a>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}