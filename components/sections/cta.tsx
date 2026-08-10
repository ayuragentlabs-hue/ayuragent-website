"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { CharFlip, Magnetic } from "@/components/ui/magnetic";
import { Reveal, RevealLines } from "@/components/ui/reveal";
import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/site";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // The panel rises and settles as it enters — a soft landing for the page.
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [44, 26]);

  return (
    <section id="contact" ref={ref} className="px-4 pb-6 pt-[var(--space-t2t)] sm:px-6">
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="relative mx-auto max-w-[1400px] overflow-hidden bg-deep px-6 py-24 text-center text-white md:py-32"
      >
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="animate-breathe absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/28 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-3xl space-y-8">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-deep-line bg-white/[0.04] px-4 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lite opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-lite" />
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/65">
                Now booking for Q3
              </span>
            </span>
          </Reveal>

          <h2 className="text-[clamp(2.3rem,6.2vw,4.4rem)] font-semibold leading-[1.0]">
            <RevealLines lines={["Ready for", "what's next?"]} />
          </h2>

          <Reveal delay={0.12}>
            <p className="mx-auto max-w-lg text-[1.02rem] leading-relaxed text-white/55">
              Tell us where the clinic is today and where you want it in twelve months.
              We&apos;ll tell you honestly whether we&apos;re the right fit.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {/* WhatsApp first — it is how clinics in Kerala actually reply. */}
              <Magnetic strength={0.2}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-brand-wash"
                >
                  <WhatsAppIcon className="h-[1.05rem] w-[1.05rem] text-brand" />
                  <CharFlip label="Chat on WhatsApp" />
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-deep-line px-7 py-3.5 text-[0.95rem] font-medium text-white/80 transition-colors duration-300 hover:border-brand-lite hover:text-white"
                >
                  <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
                  <CharFlip label="Instagram" />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 pt-1 font-mono text-[0.8rem] tracking-[0.05em] text-white/50">
              <a
                href={MAILTO_URL}
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <MailIcon className="h-4 w-4" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}
