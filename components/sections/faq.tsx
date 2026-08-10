"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { EASE, VIEWPORT } from "@/components/ui/motion-config";
import { Reveal, RevealLines } from "@/components/ui/reveal";
import { FAQS } from "@/lib/site";

export default function FAQ() {
  // First one open so the section never reads as an empty list of headings.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-paper py-[var(--space-t2t)]"
    >
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Heading column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="font-mono text-[0.75rem] md:text-[0.7rem] uppercase tracking-[0.2em] text-brand">
                Questions
              </span>
            </Reveal>
            <h2
              id="faq-heading"
              className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.03]"
            >
              <RevealLines lines={["Frequently", "asked questions"]} />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-ink-soft">
                Straight answers on how we work, what Ayurveda businesses are allowed to
                advertise in India, and how results get measured.
              </p>
            </Reveal>
          </div>

          {/* Accordion — every answer stays in the DOM so it is always crawlable. */}
          <div className="border-t border-line">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.7, delay: Math.min(i, 4) * 0.05, ease: EASE }}
                  className="border-b border-line"
                >
                  <h3>
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`text-[1.02rem] font-medium leading-snug tracking-tight transition-colors duration-300 md:text-[1.15rem] ${
                          isOpen ? "text-brand" : "text-ink group-hover:text-brand"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 text-xl font-light transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "rotate-45 text-brand" : "text-ink-faint"
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`max-w-2xl pb-7 pr-8 text-[0.96rem] leading-relaxed text-ink-soft transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
