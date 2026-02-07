import type React from "react";
import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SchemaMarkup } from "@/components/schema-markup";
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
  title: "Muhammad Tanveer Abbas | SaaS MVP Builder for Early Stage Founders",
  description:
    "Build SaaS MVPs in 2-3 weeks. Validate ideas, attract users, and showcase traction to investors. Expert in modern web technologies and rapid product development.",
  keywords:
    "SaaS MVP, MVP development, startup development, SaaS builder, early stage founders, product validation, rapid development",
  generator: "v0.app",
  openGraph: {
    title: "Muhammad Tanveer Abbas | SaaS MVP Builder",
    description:
      "Build SaaS MVPs in 2-3 weeks to validate ideas and attract investors",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tanveer Abbas | SaaS MVP Builder",
    description:
      "Build SaaS MVPs in 2-3 weeks to validate ideas and attract investors",
  },
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_geistMono.variable} ${_playfair.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-mono antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
