"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#categories", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#BEA5D4]/95 backdrop-blur-xl shadow-[0_2px_8px_rgba(139,106,168,0.25)] border-b border-[#BEA5D4]/20"
          : "bg-[#BEA5D4]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src="/logos/vendoh_purple_w_logo.png"
              alt="Vendoh"
              width={110}
              height={34}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-bold text-[#3D2052] hover:text-[#3D2052]/70 transition-colors rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-bold text-[#3D2052] hover:text-[#3D2052]/70 transition-colors rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#FF9A6C] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(255,154,108,0.35)] hover:shadow-[0_4px_16px_rgba(255,154,108,0.45)] hover:bg-[#FF8A58] transition-all duration-200 hover:-translate-y-px"
            >
              Get Early Access
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white relative z-10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-border-light"
          >
            <div className="px-5 py-5 space-y-1">
              {NAV_LINKS.map((link, i) =>
                link.href.startsWith("/") ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-base font-medium text-foreground hover:text-vendoh-blue py-3 px-3 rounded-lg hover:bg-vendoh-blue-light/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block text-base font-medium text-foreground hover:text-vendoh-blue py-3 px-3 rounded-lg hover:bg-vendoh-blue-light/50 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pt-3"
              >
                <a
                  href="/#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center rounded-full bg-vendoh-orange px-5 py-3.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(240,125,74,0.3)]"
                >
                  Get Early Access
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
