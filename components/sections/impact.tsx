"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/ui/count-up";
import { EASE, VIEWPORT } from "@/components/ui/motion-config";
import { Reveal, RevealLines } from "@/components/ui/reveal";

/** PLACEHOLDER METRICS — replace with figures you can substantiate. */
const STATS = [
  {
    label: "Consultations booked",
    render: <CountUp to={42} suffix="k+" />,
    note: "Across clinics, retreats and practices we run acquisition for.",
  },
  {
    label: "Ad spend managed",
    render: <CountUp to={11.4} decimals={1} prefix="₹" suffix="Cr" />,
    note: "Deployed against treatment-intent audiences, not reach buys.",
  },
  {
    label: "Average cost per lead",
    render: <CountUp to={41} prefix="−" suffix="%" />,
    note: "Median reduction within the first two quarters of engagement.",
  },
  {
    label: "Clinics scaled",
    render: <CountUp to={30} suffix="+" />,
    note: "Single-vaidya practices through to multi-branch groups.",
  },
];

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Slow counter-drift on the backdrop as the section passes.
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="impact" ref={ref} className="relative overflow-hidden py-[var(--space-t2t)]">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-wash/60 blur-[70px] md:blur-[130px]" />
      </motion.div>

      <div className="page-container">
        <div className="flex flex-col justify-between gap-8 pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-5">
            <Reveal>
              <span className="font-mono text-[0.75rem] md:text-[0.7rem] uppercase tracking-[0.2em] text-brand">
                Impact at scale
              </span>
            </Reveal>
            <h2 className="text-[clamp(2.1rem,5.2vw,3.9rem)] font-semibold leading-[1.02]">
              <RevealLines lines={["Design is subjective.", "Performance is not."]} />
            </h2>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-soft md:text-right">
              Every engagement reports to the same place: how many of the right patients
              sat in your consultation room this month.
            </p>
          </Reveal>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, delay: i * 0.09, ease: EASE }}
              className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-paper-soft"
            >
              <span className="font-mono text-[0.75rem] md:text-[0.68rem] uppercase tracking-[0.14em] text-ink-faint">
                {stat.label}
              </span>
              <div className="mt-6 text-[clamp(2.3rem,4.6vw,3.4rem)] font-semibold leading-none tracking-tight text-ink transition-colors duration-500 group-hover:text-brand">
                {stat.render}
              </div>
              <p className="mt-5 text-[0.86rem] leading-relaxed text-ink-soft">{stat.note}</p>
              <span className="absolute inset-x-0 bottom-0 h-[2px] w-0 bg-brand transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
