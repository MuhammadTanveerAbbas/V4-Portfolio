"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export interface MenuItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export function StaggeredMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    /*
      Hiding overflow on the body would cause a layout shift when the scrollbar
      disappears, so the scrollbar width is measured once and compensated with
      padding instead.
    */
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="p-2 text-white hover:text-[#4a0dbc] transition-colors duration-300 relative z-110"
      >
        {open ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={close}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
              aria-hidden="true"
            />

            {/*
              x from 100% to 0 is a composited transform, so the spring does not
              block the main thread.
            */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-black z-100"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center mb-12">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-xl font-black uppercase text-gray-400"
                  >
                    &#10010; Explore
                  </motion.span>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.1,
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={`font-serif text-3xl font-black uppercase transition-all duration-300 flex items-center gap-2 leading-tight group ${
                          pathname === item.href
                            ? "text-[#4a0dbc]"
                            : "text-white hover:text-[#4a0dbc]"
                        }`}
                      >
                        {item.icon ? (
                          <span
                            className={`p-1.5 rounded transition-colors ${
                              pathname === item.href
                                ? "text-[#4a0dbc]"
                                : "text-gray-400 group-hover:text-[#4a0dbc]"
                            }`}
                          >
                            <item.icon size={22} aria-hidden="true" />
                          </span>
                        ) : null}
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3 pt-6 pb-12 border-t border-gray-700"
                >
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Muhammad Tanveer Abbas on LinkedIn"
                    className="p-3 bg-black/50 text-gray-400 rounded-full hover:text-white hover:bg-[#4a0dbc]/20 transition-all border border-gray-600 hover:border-[#4a0dbc]"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Muhammad Tanveer Abbas on GitHub"
                    className="p-3 bg-black/50 text-gray-400 rounded-full hover:text-white hover:bg-[#4a0dbc]/20 transition-all border border-gray-600 hover:border-[#4a0dbc]"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label={`Email ${siteConfig.name}`}
                    className="p-3 bg-black/50 text-gray-400 rounded-full hover:text-white hover:bg-[#4a0dbc]/20 transition-all border border-gray-600 hover:border-[#4a0dbc]"
                  >
                    <Mail size={20} aria-hidden="true" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
