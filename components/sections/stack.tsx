"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlipButton } from "@/components/ui/magnetic";
import { EASE, VIEWPORT } from "@/components/ui/motion-config";
import { Reveal, RevealLines } from "@/components/ui/reveal";

const TOOLS = [
  "Meta Ads Manager",
  "Google Ads",
  "GA4",
  "WhatsApp Business API",
  "Zoho CRM",
  "Next.js",
  "Figma",
  "Looker Studio",
  "n8n",
  "Shopify",
  "Google Business Profile",
  "Notion",
];

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden py-[var(--space-t2t)]">
      <div className="page-container">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <Reveal>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand">
              The build environment
            </span>
          </Reveal>
          <h2 className="text-[clamp(1.9rem,4.6vw,3.2rem)] font-semibold leading-[1.04]">
            <RevealLines lines={["A proven stack", "for speed and scale."]} />
          </h2>
          <Reveal delay={0.12}>
            <p className="text-[0.98rem] leading-relaxed text-ink-soft">
              These are the tools we run your growth on — chosen for reliability and
              reporting you can actually audit, not for novelty.
            </p>
          </Reveal>
        </div>

        <motion.div
          style={{ y: gridY }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-4"
        >
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={VIEWPORT}
              transition={{ duration: 0.65, delay: (i % 4) * 0.06 + Math.floor(i / 4) * 0.08, ease: EASE }}
              className="group relative flex h-[104px] items-center justify-center bg-paper px-4 text-center transition-colors duration-500 hover:bg-deep"
            >
              <span className="text-[0.92rem] font-medium tracking-tight text-ink-soft transition-colors duration-500 group-hover:text-white">
                {tool}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <FlipButton label="Start a project" href="#contact" variant="solid" />
        </Reveal>
      </div>
    </section>
  );
}
