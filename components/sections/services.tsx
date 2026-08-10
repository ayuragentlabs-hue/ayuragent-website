"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FlipButton } from "@/components/ui/magnetic";
import { EASE, VIEWPORT } from "@/components/ui/motion-config";
import { Reveal, RevealLines } from "@/components/ui/reveal";
// Shared with the Service structured data so the two can never drift apart.
import { SERVICES } from "@/lib/site";

export default function Services() {
  const [active, setActive] = useState<string | null>(SERVICES[0].id);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-deep py-[var(--space-t2t)] text-white"
    >
      {/* Depth: grid + green glows */}
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-breathe absolute -right-[8%] top-[6%] h-[560px] w-[560px] rounded-full bg-brand/25 blur-[150px]" />
        <div className="absolute -left-[10%] bottom-[4%] h-[480px] w-[480px] rounded-full bg-brand-mid/16 blur-[140px]" />
      </div>

      <div className="page-container relative">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-6">
            <Reveal>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand-lite">
                Capabilities
              </span>
            </Reveal>
            <h2 className="text-[clamp(2.1rem,5.2vw,3.9rem)] font-semibold leading-[1.02]">
              <RevealLines lines={["The full spectrum", "of core capabilities"]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-[0.98rem] leading-relaxed text-white/55">
              We replace the need for multiple vendors. From positioning to the automation
              your front desk runs on, we build the whole system your clinic grows through.
            </p>
            <div className="pt-7">
              <FlipButton label="Work With Us" href="#contact" variant="light" />
            </div>
          </Reveal>
        </div>

        {/* Expanding capability rows */}
        <div className="border-t border-deep-line">
          {SERVICES.map((service, i) => {
            const isActive = active === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, delay: i * 0.07, ease: EASE }}
                onMouseEnter={() => setActive(service.id)}
                onFocus={() => setActive(service.id)}
                className="group relative border-b border-deep-line"
              >
                {/* Hover wash */}
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/14 to-transparent"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  aria-hidden="true"
                />

                <button
                  onClick={() => setActive(isActive ? null : service.id)}
                  aria-expanded={isActive}
                  className="relative flex w-full items-start gap-6 px-1 py-8 text-left md:gap-10 md:px-3"
                >
                  <span className="pt-2 font-mono text-[0.72rem] tracking-[0.14em] text-brand-lite">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1">
                    <span className="flex items-baseline justify-between gap-6">
                      <span
                        className={`text-[clamp(1.5rem,3.4vw,2.6rem)] font-semibold leading-tight tracking-tight transition-colors duration-400 ${
                          isActive ? "text-white" : "text-white/55"
                        }`}
                      >
                        {service.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="mt-1 shrink-0 text-2xl font-light text-brand-lite"
                        aria-hidden="true"
                      >
                        +
                      </motion.span>
                    </span>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="block overflow-hidden"
                        >
                          <span className="block max-w-xl pt-5 text-[0.98rem] leading-relaxed text-white/60">
                            {service.summary}
                          </span>
                          <span className="mt-5 flex flex-wrap gap-2">
                            {service.deliverables.map((d) => (
                              <span
                                key={d}
                                className="rounded-full border border-deep-line bg-white/[0.04] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white/60"
                              >
                                {d}
                              </span>
                            ))}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
