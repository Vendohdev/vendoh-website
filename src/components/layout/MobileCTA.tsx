"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > 600;
      // Hide once the waitlist section itself is on screen
      const waitlist = document.getElementById("waitlist");
      let waitlistInView = false;
      if (waitlist) {
        const rect = waitlist.getBoundingClientRect();
        waitlistInView = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(pastHero && !waitlistInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 pointer-events-none"
        >
          <Link
            href="/#waitlist"
            className="btn-shine pointer-events-auto flex items-center justify-center gap-2 rounded-full bg-[#FF9A6C] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(42,31,92,0.35)] border border-white/20"
          >
            Get Early Access — launching 2026
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
