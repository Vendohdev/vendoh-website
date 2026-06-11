"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#categories", label: "Services" },
  { href: "/vendors", label: "Become a Vendor" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-vendoh-ink/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(42,31,92,0.35)] border-b border-white/10"
          : "bg-vendoh-ink"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Vendoh home"
            className="flex items-center gap-2.5 relative z-10"
          >
            <Image
              src="/logos/vendoh-wordmark-white.png"
              alt="Vendoh"
              width={135}
              height={44}
              priority
              sizes="135px"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`px-3 xl:px-4 py-2 text-[13px] font-bold whitespace-nowrap transition-colors rounded-lg ${
                  isActive(link.href)
                    ? "text-white bg-white/15"
                    : "text-white hover:text-white/80 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href="/#waitlist"
              className="btn-shine inline-flex items-center justify-center rounded-full bg-[#FF9A6C] px-5 py-2 text-[13px] font-semibold text-white whitespace-nowrap shadow-[0_2px_8px_rgba(255,154,108,0.35)] hover:shadow-[0_4px_16px_rgba(255,154,108,0.45)] hover:bg-[#FF8A58] transition-all duration-200 hover:-translate-y-px"
            >
              Get Early Access
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-white relative z-10"
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
            className="xl:hidden overflow-hidden bg-vendoh-ink/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-5 py-5 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block text-[15px] font-medium text-white py-3 px-3 rounded-lg transition-colors ${
                      isActive(link.href) ? "bg-white/15" : "hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
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
