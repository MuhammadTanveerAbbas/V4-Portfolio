"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface StaggeredMenuProps {
  items: MenuItem[];
}

export function StaggeredMenu({ items }: StaggeredMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    /*
      Original: document.body.style.overflow = "hidden" / "unset"
      Problem: changing `overflow` on body forces a synchronous layout recalculation
      (reflow) and can cause a layout shift if the scrollbar disappears and the
      page width changes by ~15px.

      Fix: use padding-right to compensate for the scrollbar width before hiding
      overflow, preventing the layout shift. The scrollbar width is measured once
      via a cheap offsetWidth diff — no continuous reads.
    */
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white hover:text-[#4a0dbc] transition-colors duration-300 relative z-100"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={close}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

            {/*
              Menu Panel — spring animation kept identical.
              The x: "100%" → x: 0 transition is a CSS transform (translateX),
              which runs on the compositor thread and doesn't block the main thread.
              Framer Motion uses transform under the hood for x/y motion values.
            */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-black z-70"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center mb-12">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-xl font-black uppercase text-gray-400"
                  >
                    ✚ Explore Pages
                  </motion.span>
                </div>

                {/* Menu Items */}
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
                        className={`font-serif text-3xl font-black uppercase transition-all duration-300 flex items-center gap-2 leading-tight group ${
                          pathname === item.href
                            ? "text-[#4a0dbc]"
                            : "text-white hover:text-[#4a0dbc]"
                        }`}
                      >
                        <span
                          className={`p-1.5 rounded transition-colors ${
                            pathname === item.href
                              ? "text-[#4a0dbc]"
                              : "text-gray-400 group-hover:text-[#4a0dbc]"
                          }`}
                        >
                          <item.icon size={22} />
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3 pt-6 pb-12 border-t border-gray-700"
                >
                  <a
                    href="https://linkedin.com/in/muhammadtanveerabbas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/50 text-gray-400 rounded-full hover:text-white hover:bg-[#4a0dbc]/20 transition-all border border-gray-600 hover:border-[#4a0dbc]"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/muhammadtanveerabbas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/50 text-gray-400 rounded-full hover:text-white hover:bg-[#4a0dbc]/20 transition-all border border-gray-600 hover:border-[#4a0dbc]"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:muhammadtanveerabbas.contact@gmail.com"
                    className="p-3 bg-black/50 text-gray-400 rounded-full hover:text-white hover:bg-[#4a0dbc]/20 transition-all border border-gray-600 hover:border-[#4a0dbc]"
                  >
                    <Mail size={20} />
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
