/**
 * Single source of truth for site-wide identity, metadata and contact details.
 * Every page, metadata block, sitemap entry and structured data reference reads
 * from here so the site never contradicts itself.
 */

export const SITE_URL = "https://muhammadtanveerabbas.vercel.app";

export const siteConfig = {
  name: "Muhammad Tanveer Abbas",
  role: "Software Developer",
  headline: "I build practical software for B2B businesses.",
  tagline:
    "Business software, internal tools, customer applications, workflow systems and SaaS products built to be used in production.",
  description:
    "Muhammad Tanveer Abbas is a software developer who builds practical business software and SaaS products for B2B companies: internal tools, customer-facing applications, workflow systems and AI assisted products.",
  email: "muhammadtanveerabbas.contact@gmail.com",
  location: "Pakistan (PKT, UTC+5)",
  availability: "Available for new projects",
  url: SITE_URL,
  ogImage: "/opengraph-image.png",
  logo: "/Logo.png",
  social: {
    linkedin: "https://linkedin.com/in/muhammadtanveerabbas",
    github: "https://github.com/MuhammadTanveerAbbas",
    x: "https://x.com/m_tanveerabbas",
  },
} as const;

export const socialLinks = [
  { name: "LinkedIn", href: siteConfig.social.linkedin },
  { name: "GitHub", href: siteConfig.social.github },
  { name: "X", href: siteConfig.social.x },
] as const;

/** Primary navigation, shared by the desktop nav and the mobile menu. */
export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}