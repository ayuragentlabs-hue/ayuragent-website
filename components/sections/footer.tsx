"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { CharFlip } from "@/components/ui/magnetic";
import { VIEWPORT } from "@/components/ui/motion-config";
import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/site";

const COLUMNS = [
  {
    title: "Navigate",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Impact", href: "#impact" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Patient Acquisition", href: "#services" },
      { label: "Brand & Web", href: "#services" },
      { label: "AI & Automation", href: "#services" },
      { label: "Content Studio", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "WhatsApp", href: WHATSAPP_URL, external: true },
      { label: "Instagram", href: SITE.social.instagram, external: true },
      { label: "Email", href: MAILTO_URL },
    ],
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // Giant wordmark rises out of the fold as the footer completes.
  const markY = useTransform(scrollYProgress, [0, 1], ["28%", "0%"]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-paper pt-24">
      <div className="page-container">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-brand/12" />
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none">
                  <path d="M12 21c0-6 3-10 8-12-1 7-3.5 10.5-8 12Z" fill="currentColor" opacity="0.9" />
                  <path d="M12 21C12 14 8.5 9.5 4 8c1 7 3.5 11.5 8 13Z" fill="currentColor" opacity="0.45" />
                </svg>
              </span>
              <span className="text-[0.98rem] font-semibold tracking-tight">
                AyurAgent<span className="text-brand"> Labs</span>
              </span>
            </div>
            <p className="max-w-xs text-[0.9rem] leading-relaxed text-ink-soft">
              An Ayurveda marketing agency in Kerala. Brand, web, campaigns and
              automation for clinics that intend to lead their region.
            </p>
            <p className="text-[0.9rem] text-ink-soft">
              Founded by{" "}
              <span className="font-medium text-ink">{SITE.founder.name}</span>
            </p>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint">
              {SITE.region}, {SITE.country}
            </p>

            {/* Direct-contact buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Message AyurAgent Labs on WhatsApp at ${SITE.phoneDisplay}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`AyurAgent Labs on Instagram, @${SITE.instagramHandle}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="ml-1 font-mono text-[0.78rem] tracking-[0.04em] text-ink-soft transition-colors duration-300 hover:text-brand"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-block text-[0.92rem] text-ink-soft transition-colors hover:text-brand"
                    >
                      <CharFlip label={link.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.72rem] tracking-[0.06em] text-ink-faint">
            © {new Date().getFullYear()} AyurAgent Labs Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((l) => (
              <a
                key={l}
                href="#"
                className="group font-mono text-[0.72rem] tracking-[0.06em] text-ink-faint transition-colors hover:text-ink"
              >
                <CharFlip label={l} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <motion.div
        style={{ y: markY, opacity: markOpacity }}
        className="pointer-events-none select-none px-4"
        aria-hidden="true"
      >
        <motion.h2
          initial={{ letterSpacing: "0.06em" }}
          whileInView={{ letterSpacing: "-0.03em" }}
          viewport={VIEWPORT}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-b from-brand/35 via-brand-wash to-paper bg-clip-text text-center text-[clamp(2.4rem,13.6vw,13rem)] font-semibold leading-[0.84] text-transparent"
        >
          AYURAGENT
        </motion.h2>
      </motion.div>
    </footer>
  );
}
