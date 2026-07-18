import { Linkedin, Github, ArrowUpRight, Star, Home, User, Briefcase, Code2, Mail, HelpCircle } from "lucide-react";
import Image from "next/image";

function XLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.491L1.227 2.25h6.836l4.713 6.231 5.579-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammadtanveerabbas",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/muhammadtanveerabbas",
  },
  {
    name: "X",
    icon: XLogo,
    href: "https://x.com/m_tanveerabbas",
  },
];

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Work", href: "/work", icon: Code2 },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "FAQ", href: "/#faq", icon: HelpCircle },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      {/* CTA Section */}
      <section className="bg-black py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">
            Have a project in mind?
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[12vw] font-black uppercase text-white leading-none mb-10 md:mb-16">
            Let&apos;s Talk
          </h2>
          <a
            href="mailto:muhammadtanveerabbas.contact@gmail.com"
            className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors duration-200 shadow-lg shadow-[#4a0dbc]/40"
          >
            Contact Email
            <ArrowUpRight
              size={16}
              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
          </a>
        </div>
      </section>

      {/* Footer Grid with 1px border pattern */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-px md:bg-white/10">
            {/* Brand */}
            <div className="bg-black p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/Logo.png" alt="Logo" width={36} height={36} />
                <h3 className="font-serif text-xl md:text-2xl font-bold uppercase text-white leading-tight">
                  Muhammad Tanveer Abbas
                </h3>
              </div>
              <p className="font-mono text-sm text-white/50 leading-relaxed">
                Full Stack Developer crafting digital experiences with modern
                technologies and clean architecture.
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available for work
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-black p-6 md:p-10">
              <p className="font-mono text-xs uppercase text-white/40 tracking-widest mb-5">
                Navigation
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-mono text-sm text-white/70 hover:text-[#4a0dbc] transition-colors duration-200"
                  >
                    <link.icon size={14} className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="bg-black p-6 md:p-10">
              <p className="font-mono text-xs uppercase text-white/40 tracking-widest mb-5">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-white rounded-full border border-white/20 hover:bg-[#4a0dbc] hover:border-[#4a0dbc] hover:shadow-lg hover:shadow-[#4a0dbc]/50 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <div className="hidden sm:block mt-6">
                <a
                  href="mailto:muhammadtanveerabbas.contact@gmail.com"
                  className="group inline-flex items-center gap-2 font-mono text-sm text-white/70 hover:text-[#4a0dbc] transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-[#4a0dbc] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  muhammadtanveerabbas.contact@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] sm:text-xs text-white/40">
            &copy; {currentYear} Muhammad Tanveer Abbas. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] sm:text-xs text-white/30">
              Built with Next.js
            </span>
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white/40 hover:text-[#4a0dbc] transition-colors duration-200"
            >
              Back to top
              <Star size={10} className="text-[#4a0dbc] opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
