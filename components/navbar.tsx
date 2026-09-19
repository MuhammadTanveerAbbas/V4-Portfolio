"use client";

import {
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { StaggeredMenu } from "./staggered-menu";

const navIcons: Record<string, LucideIcon> = {
  Work: Briefcase,
  Services: Wrench,
  About: User,
  Contact: MessageSquare,
};

const items = navItems.map((item) => ({
  ...item,
  icon: navIcons[item.label],
}));

/*
  The Work item stays active on both /work and /work/[slug], so nested routes
  match by prefix instead of exact equality.
*/
function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Social links never change, so they do not need to re-render on navigation.
const SocialLinks = memo(function SocialLinks() {
  return (
    <div className="hidden md:flex gap-2">
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Muhammad Tanveer Abbas on LinkedIn"
        className="p-3 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-black hover:shadow-lg hover:shadow-[#4a0dbc]/50"
      >
        <Linkedin size={20} aria-hidden="true" />
      </a>
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Muhammad Tanveer Abbas on GitHub"
        className="p-3 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-black hover:shadow-lg hover:shadow-[#4a0dbc]/50"
      >
        <Github size={20} aria-hidden="true" />
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        aria-label={`Email ${siteConfig.name}`}
        className="p-3 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-black hover:shadow-lg hover:shadow-[#4a0dbc]/50"
      >
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  );
});

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-transparent backdrop-blur-md"
    >
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label="Muhammad Tanveer Abbas, home"
      >
        <Image src={siteConfig.logo} alt="" width={32} height={32} />
        <span className="font-serif text-sm md:text-lg font-bold uppercase tracking-wide text-white">
          {siteConfig.name}
        </span>
      </Link>

      <div className="hidden md:flex lg:hidden items-center gap-0.5 bg-white/5 px-1 py-1 rounded-full backdrop-blur-sm border border-white/10">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className={`px-4 py-1.5 rounded-full font-mono text-[11px] tracking-wide transition-all duration-200 uppercase ${
              isActive(pathname, item.href)
                ? "bg-[#4a0dbc] text-white shadow-md shadow-[#4a0dbc]/40"
                : "text-white/60 hover:text-white hover:bg-white/8"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <StaggeredMenu items={items} />
        <SocialLinks />
      </div>
    </nav>
  );
}
