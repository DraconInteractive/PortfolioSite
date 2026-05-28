"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navHref = (hash: string) =>
    pathname === "/" ? hash : `/${hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#fafaf7]/90 backdrop-blur-sm border-b border-[#e0dcd4]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={close}
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg tracking-tight text-[#111110] hover:text-[#ff5c00] transition-colors"
          >
            PC
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={navHref(link.href)}
                  className="text-sm text-[#7a7872] hover:text-[#111110] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/DraconInteractive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1.5 border border-[#e0dcd4] text-[#111110] rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all"
              >
                GitHub
              </a>
            </li>
          </ul>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50"
          >
            <span
              className={`block h-0.5 bg-[#111110] transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[7px] w-6" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-[#111110] transition-all duration-300 ${
                isOpen ? "opacity-0 w-4" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-[#111110] transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[7px] w-6" : "w-6"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="fixed inset-0 z-40 bg-[#fafaf7] flex flex-col px-8 pt-28 pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-2 flex-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={navHref(link.href)}
                  onClick={close}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.06, ease: "easeOut" as const }}
                  className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(2.5rem,10vw,3.5rem)] leading-tight text-[#111110] border-b border-[#e0dcd4] py-4 hover:text-[#ff5c00] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.28 }}
              className="flex flex-col gap-4 pt-8"
            >
              <a
                href="https://github.com/DraconInteractive"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="text-sm px-5 py-3 border border-[#e0dcd4] text-[#111110] rounded hover:border-[#ff5c00] hover:text-[#ff5c00] transition-all w-fit"
              >
                GitHub ↗
              </a>
              <p className="text-xs text-[#7a7872] font-mono">petermarkcarey@gmail.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
