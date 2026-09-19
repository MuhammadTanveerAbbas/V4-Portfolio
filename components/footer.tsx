import { ArrowUpRight, Briefcase, Github, Home, Linkedin, MessageSquare, User, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

function XLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.432-8.491L1.227 2.25h6.836l4.713 6.231 5.579-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const navIcons: Record<string, typeof Home> = {
  Work: Briefcase,
  Services: Wrench,
  About: User,
  Contact: MessageSquare,
};

const footerLinks = [
  { name: "Home", href: "/", icon: Home },
  ...navItems.map((item) => ({ name: item.label, href: item.href, icon: navIcons[item.label] })),
  { name: "FAQ", href: "/#faq", icon: MessageSquare },
];

const socials = [
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { name: "GitHub", href: siteConfig.social.github, icon: Github },
  { name: "X", href: siteConfig.social.x, icon: XLogo },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <section className="bg-black py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">
            Have a project in mind?
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[12vw] font-black uppercase text-white leading-none mb-10 md:mb-16">
            Let&apos;s Talk
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors duration-200 shadow-lg shadow-[#4a0dbc]/40"
          >
            Send an email
            <ArrowUpRight
              size={16}
              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-3 md:gap-px md:bg-white/10">
            <div className="bg-black p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Image src={siteConfig.logo} alt="" width={36} height={36} />
                <h3 className="font-serif text-xl md:text-2xl font-bold uppercase text-white leading-tight">
                  {siteConfig.name}
                </h3>
              </div>
              <p className="font-mono text-sm text-white/50 leading-relaxed">
                I build practical business software and SaaS products for B2B
                companies: internal tools, customer applications, workflow
                systems and AI assisted products.
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 font-mono text-xs text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  {siteConfig.availability}
                </span>
              </div>
            </div>

            <div className="bg-black p-6 md:p-10">
              <p className="font-mono text-xs uppercase text-white/40 tracking-widest mb-5">
                Navigation
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-mono text-sm text-white/70 hover:text-[#4a0dbc] transition-colors duration-200"
                  >
                    <link.icon
                      size={14}
                      className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-black p-6 md:p-10">
              <p className="font-mono text-xs uppercase text-white/40 tracking-widest mb-5">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name} on ${social.name}`}
                    className="p-3 text-white rounded-full border border-white/20 hover:bg-[#4a0dbc] hover:border-[#4a0dbc] hover:shadow-lg hover:shadow-[#4a0dbc]/50 transition-all duration-300"
                  >
                    <social.icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2 font-mono text-sm text-white/70 hover:text-[#4a0dbc] transition-colors duration-200 break-all"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-[#4a0dbc] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden="true"
                  />
                  {siteConfig.email}
                </a>
                <p className="font-mono text-xs text-white/40 mt-3">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] sm:text-xs text-white/40">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] sm:text-xs text-white/30">Built with Next.js</span>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white/40 hover:text-[#4a0dbc] transition-colors duration-200"
            >
              Back to top
              <span
                className="text-[#4a0dbc] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
              >
                &#8593;
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
