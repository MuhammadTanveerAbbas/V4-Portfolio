"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Menu,
  Linkedin,
  Github,
  Mail,
  Briefcase,
  Wrench,
  User,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Work: <Briefcase size={24} />,
  Services: <Wrench size={24} />,
  About: <User size={24} />,
  Contact: <MessageSquare size={24} />,
};

export function StaggeredMenu({ items }: StaggeredMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const layerVariants = {
    hidden: { x: "100%" },
    visible: (i: number) => ({
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: { x: "100%", transition: { duration: 0.25 } },
  };

  const panelVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        delay: 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.35 + i * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white hover:text-[#4a0dbc] transition-colors duration-300"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            />

            <div className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-black z-40 flex flex-col overflow-hidden">
              {["#0a0a0f", "#1a1a1f", "#2a2a2f"].map((color, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={layerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-0 right-0 h-full w-full sm:w-80"
                  style={{ background: color, zIndex: 5 - i }}
                />
              ))}

              <motion.div
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-0 right-0 h-full w-full sm:w-80 flex flex-col p-6 z-10 overflow-y-auto sm:overflow-y-hidden"
              >
                <div className="flex items-center justify-between mb-12">
                  <Image src="/logo.png" alt="Logo" width={24} height={24} />
                  <motion.button
                    onClick={() => setOpen(false)}
                    className="p-2 text-white hover:text-[#4a0dbc] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`font-serif text-3xl font-black uppercase transition-all duration-300 flex items-center gap-3 leading-tight ${
                          pathname === item.href
                            ? "text-[#4a0dbc] drop-shadow-lg"
                            : "text-white hover:text-[#4a0dbc]"
                        }`}
                      >
                        <span className="bg-black p-2 rounded text-gray-400">
                          {iconMap[item.label]}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex gap-3 mt-auto pt-6 border-t border-[#4a0dbc]/30"
                >
                  <a
                    href="https://linkedin.com/in/muhammadtanveerabbas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black text-gray-400 rounded-full hover:text-white transition-all border border-gray-600 hover:border-gray-400"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/muhammadtanveerabbas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black text-gray-400 rounded-full hover:text-white transition-all border border-gray-600 hover:border-gray-400"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="mailto:muhammadtanveerabbas.contact@gmail.com"
                    className="p-2 bg-black text-gray-400 rounded-full hover:text-white transition-all border border-gray-600 hover:border-gray-400"
                  >
                    <Mail size={18} />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
