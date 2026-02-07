import { Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/m_tanveerabbas",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammadtanveerabbas",
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/muhammadtanveerabbas",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-12 md:pt-16 pb-4 md:pb-6 overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[8vw] leading-none font-black uppercase mb-6 md:mb-8 text-white drop-shadow-lg">
            Let's Talk
          </h2>
          <a
            href="mailto:muhammadtanveerabbas.contact@gmail.com"
            className="px-6 md:px-12 py-3 md:py-4 bg-black text-white rounded-full font-mono text-sm md:text-lg uppercase hover:scale-105 transition-transform whitespace-nowrap shadow-lg shadow-[#4a0dbc]/60 hover:shadow-xl hover:shadow-[#4a0dbc]/80 border border-[#4a0dbc]/50 hover:border-[#4a0dbc]"
          >
            Contact Email
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8 md:mb-12" />

        {/* Footer Bottom Section - Copyright left, Social right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-mono text-xs text-white/60">
            © {currentYear} Muhammad Tanveer Abbas. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black text-white rounded-full hover:bg-[#4a0dbc] hover:text-white transition-colors border border-white/20 hover:border-[#4a0dbc] hover:shadow-lg hover:shadow-[#4a0dbc]/50"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
