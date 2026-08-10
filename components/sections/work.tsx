"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealLines } from "@/components/ui/reveal";

/**
 * Case studies are anonymised by engagement type rather than named. Only add a
 * client's name here once you have their written permission to publish it, and
 * only alongside a metric you can substantiate if asked.
 */
const PROJECTS = [
  {
    name: "A 40-bed panchakarma retreat",
    category: "Kerala · brand + acquisition",
    blurb:
      "Repositioned the centre around its treatment outcomes rather than its tariff, then rebuilt acquisition end to end.",
    metric: "3.1×",
    metricLabel: "Occupancy in 7 months",
    tags: ["Brand", "Web", "Meta Ads"],
    tone: "from-brand to-brand-mid",
  },
  {
    name: "A four-branch clinic group",
    category: "Kerala · pipeline + attribution",
    blurb:
      "Four branches, one pipeline. Unified enquiry routing, WhatsApp follow-up and per-branch attribution so spend follows the chairs that fill.",
    metric: "−41%",
    metricLabel: "Cost per consultation",
    tags: ["Automation", "CRM", "Local SEO"],
    tone: "from-brand-mid to-brand-lite",
  },
  {
    name: "A D2C ayurvedic brand",
    category: "India · identity + retention",
    blurb:
      "A products brand that read like a pharmacy. We gave it a shelf presence and a subscription funnel that actually retains.",
    metric: "₹2.4Cr",
    metricLabel: "Attributed revenue",
    tags: ["Identity", "Shopify", "Retention"],
    tone: "from-brand to-brand-lite",
  },
  {
    name: "A practising vaidya",
    category: "Kerala · content + funnel",
    blurb:
      "Turned a respected practitioner into one of the region's most-watched Ayurveda educators — and the waitlist that came with it.",
    metric: "180k",
    metricLabel: "Organic monthly reach",
    tags: ["Content", "Reels", "Funnel"],
    tone: "from-brand-mid to-brand",
  },
];

function ProjectCard({
  project,
  i,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[number];
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each card shrinks a little as the next one stacks over it.
  const targetScale = 1 - (total - 1 - i) * 0.035;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const cardOpacity = useTransform(progress, [i / total, (i + 0.85) / total], [1, 0.55]);

  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center px-0">
      <motion.article
        style={{ scale, top: `${i * 22}px` }}
        className="relative w-full max-w-[1100px] overflow-hidden rounded-[26px] border border-line bg-paper shadow-[0_40px_100px_-40px_rgba(6,33,26,0.3)]"
      >
        <motion.div style={{ opacity: cardOpacity }} className="grid gap-0 md:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col justify-between gap-8 p-8 md:p-11">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-line-strong" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-faint">
                  {project.category}
                </span>
              </div>

              <h3 className="text-[clamp(1.7rem,3.1vw,2.5rem)] font-semibold leading-[1.05]">
                {project.name}
              </h3>

              <p className="max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                {project.blurb}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-paper-soft px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-end gap-4 border-t border-line pt-6">
                <span className="text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-none tracking-tight text-brand">
                  {project.metric}
                </span>
                <span className="pb-1 text-[0.82rem] leading-tight text-ink-faint">
                  {project.metricLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[240px] overflow-hidden bg-paper-soft md:min-h-[440px]">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.tone} opacity-95`}
            />
            <div
              className="grid-backdrop absolute inset-0 opacity-40"
              aria-hidden="true"
            />
            {/* Concentric rings motif */}
            <svg
              viewBox="0 0 400 400"
              className="absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              {[70, 110, 150, 190].map((r, k) => (
                <circle
                  key={r}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.9"
                  opacity={0.28 - k * 0.05}
                />
              ))}
              <g transform="translate(200 200)">
                <path
                  d="M0 62C0 16 22-22 62-36 54 16 32 50 0 62Z"
                  fill="#fff"
                  opacity="0.9"
                />
                <path
                  d="M0 62C0 16-22-22-62-36-54 16-32 50 0 62Z"
                  fill="#fff"
                  opacity="0.45"
                />
              </g>
            </svg>
            <div className="absolute bottom-5 left-5 rounded-lg bg-white/15 px-3 py-1.5 backdrop-blur-md">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white">
                Case study
              </span>
            </div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="relative bg-paper pt-[var(--space-t2t)]">
      <div className="page-container">
        <div className="flex flex-col justify-between gap-6 pb-14 md:flex-row md:items-end">
          <h2 className="text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.02]">
            <RevealLines lines={["Selected work"]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[0.98rem] leading-relaxed text-ink-soft md:text-right">
              Each one built end to end with the people who own it — no handoffs, no
              agency middle layer.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Sticky stack */}
      <div ref={ref} className="page-container relative">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            i={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
