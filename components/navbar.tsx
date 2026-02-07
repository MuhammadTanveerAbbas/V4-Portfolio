"use client"

import { Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { StaggeredMenu } from "./staggered-menu"

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-transparent backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="font-serif text-sm md:text-lg font-bold uppercase tracking-wide text-white">
          Muhammad Tanveer Abbas
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-4 bg-black/90 p-2 rounded-full backdrop-blur-sm border border-white/10">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-colors uppercase ${
              pathname === item.href
                ? "bg-[#4a0dbc] text-white shadow-lg shadow-[#4a0dbc]/50"
                : "bg-transparent text-white hover:bg-[#4a0dbc] hover:text-white hover:shadow-lg hover:shadow-[#4a0dbc]/50"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <StaggeredMenu items={navItems} />

        <div className="hidden md:flex gap-2">
          <a
            href="https://linkedin.com/in/muhammadtanveerabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-black hover:shadow-lg hover:shadow-[#4a0dbc]/50"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/muhammadtanveerabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-black hover:shadow-lg hover:shadow-[#4a0dbc]/50"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:muhammadtanveerabbas.contact@gmail.com"
            className="p-3 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-black hover:shadow-lg hover:shadow-[#4a0dbc]/50"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
