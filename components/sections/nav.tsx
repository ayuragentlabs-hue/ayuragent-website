"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { CharFlip, Magnetic } from "@/components/ui/magnetic";
import { EASE } from "@/components/ui/motion-config";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    // Hide on the way down, bring it back the moment they scroll up.
    setHidden(y > prev && y > 260 && !open);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="page-container flex h-[72px] items-center justify-between">
          {/* Wordmark */}
          <a href="#top" className="group -my-2 flex items-center gap-2.5 py-2">
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-brand/12" />
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none">
                <path
                  d="M12 21c0-6 3-10 8-12-1 7-3.5 10.5-8 12Z"
                  fill="currentColor"
                  opacity="0.9"
                />
                <path
                  d="M12 21C12 14 8.5 9.5 4 8c1 7 3.5 11.5 8 13Z"
                  fill="currentColor"
                  opacity="0.45"
                />
              </svg>
            </span>
            <span className="text-[0.98rem] font-semibold tracking-tight">
              AyurAgent<span className="text-brand"> Labs</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group text-[0.9rem] text-ink-soft transition-colors hover:text-ink"
              >
                <CharFlip label={l.label} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-line bg-paper-soft px-3.5 py-1.5 lg:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-mid opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-[0.75rem] md:text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft">
                Booking Q3
              </span>
            </div>

            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="group hidden rounded-full bg-ink px-5 py-2.5 text-[0.88rem] font-medium text-white transition-colors duration-300 hover:bg-brand sm:inline-flex"
              >
                <CharFlip label="Work With Us" />
              </a>
            </Magnetic>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line md:hidden"
            >
              <span
                className={`block h-[1.5px] w-4 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.25px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.42, ease: EASE }}
        className="overflow-hidden border-b border-line bg-paper/95 backdrop-blur-xl md:hidden"
      >
        <div className="page-container flex flex-col gap-1 py-5">
          {[...LINKS, { label: "Work With Us", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 text-lg tracking-tight last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
