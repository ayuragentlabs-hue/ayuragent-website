"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/site";

/**
 * The studio's own positioning statement, not a client testimonial. If you ever
 * swap this for a real quote, it needs a named, consenting attribution.
 */
const STATEMENT =
  "We don't sell campaigns. We build the system a clinic grows through — the positioning, the site, the ads and the follow-up — and we hold all of it to a single number: how many of the right patients sat in your consultation room this month.";

/** One word, lit from dim to full as the section scrolls through the viewport. */
function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="mr-[0.26em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.2"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section className="relative bg-paper-soft py-[var(--space-t2t)]">
      <div className="page-container">
        <div ref={ref} className="mx-auto max-w-4xl">
          <Reveal>
            <span className="mb-10 block font-mono text-[0.75rem] md:text-[0.7rem] uppercase tracking-[0.2em] text-brand">
              How we work
            </span>
          </Reveal>

          {/* Scroll-lit quote */}
          <p className="flex flex-wrap text-[clamp(1.4rem,3.4vw,2.5rem)] font-medium leading-[1.28] tracking-[-0.025em] text-ink">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>

          <Reveal delay={0.1}>
            <div className="mt-12 flex items-center gap-4 border-t border-line pt-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/12">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none">
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
              <span className="leading-tight">
                <span className="block text-[0.98rem] font-medium">
                  {SITE.founder.name}
                </span>
                <span className="block font-mono text-[0.75rem] md:text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint">
                  {SITE.founder.role}, {SITE.name} · {SITE.region}, {SITE.country}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
