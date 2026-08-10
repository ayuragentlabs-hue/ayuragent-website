"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FlipButton } from "@/components/ui/magnetic";
import { EASE } from "@/components/ui/motion-config";

const ROTATING = [
  "Ayurveda clinics",
  "panchakarma retreats",
  "practising vaidyas",
  "D2C ayurvedic brands",
];

// The longest entry, used to reserve width so the line never reflows mid-swap.
const WIDEST = "D2C ayurvedic brands";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  // Scroll-linked parallax: the whole hero drifts up, softens and recedes.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Pointer tilt on the emblem.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, []);

  function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 22);
    tiltX.set(-py * 22);
  }

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* Ambient green glows */}
      <motion.div
        style={{ scale: glowScale }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="animate-breathe absolute -left-[10%] top-[8%] h-[520px] w-[520px] rounded-full bg-brand-lite/25 blur-[70px] md:blur-[130px]" />
        <div className="absolute right-[4%] top-[22%] h-[600px] w-[600px] rounded-full bg-brand/12 blur-[70px] md:blur-[150px]" />
        <div className="absolute bottom-[-15%] left-1/3 h-[420px] w-[520px] rounded-full bg-brand-wash/70 blur-[70px] md:blur-[120px]" />
      </motion.div>

      {/* Faint grid */}
      <div
        className="grid-backdrop-light pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="page-container">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-6">
          {/* ---------- Copy ---------- */}
          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="w-full space-y-7 md:w-[58%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 px-4 py-1.5 md:backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-mid opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-[0.75rem] md:text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">
                Now booking for Q3
              </span>
            </motion.div>

            {/* Static H1 — crawlers and answer engines index this verbatim, so the
                headline claim stays in the markup rather than swapping in JS. */}
            <h1 className="text-[clamp(2.35rem,6.4vw,5rem)] font-semibold leading-[1.0]">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.05, ease: EASE, delay: 0.1 }}
                >
                  <span className="text-ink-faint">The </span>
                  <span className="bg-gradient-to-br from-brand to-brand-mid bg-clip-text text-transparent">
                    best Ayurveda marketer
                  </span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.05, ease: EASE, delay: 0.2 }}
                >
                  your clinic deserves
                </motion.span>
              </span>
            </h1>

            {/* Audience rotator — keeps the hero's motion beat and names the
                segments we want to be found for. */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.34 }}
              className="flex flex-wrap items-baseline gap-x-2 text-[1.05rem] font-medium md:text-[1.2rem]"
            >
              <span className="text-ink-faint">Built for</span>
              <span className="relative -mb-[0.22em] inline-grid overflow-hidden pb-[0.22em]">
                <span className="invisible col-start-1 row-start-1" aria-hidden="true">
                  {WIDEST}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={ROTATING[index]}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="col-start-1 row-start-1 whitespace-nowrap text-brand"
                  >
                    {ROTATING[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
              className="max-w-xl text-[1.05rem] leading-relaxed text-ink-soft md:text-[1.15rem]"
            >
              An Ayurveda marketing agency in Kerala. We build the patient acquisition
              systems that fill your consultation calendar — brand, website, Meta and
              Google campaigns, and WhatsApp automation, run end to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.52 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <FlipButton label="Book a strategy call" href="#contact" variant="solid" />
              <FlipButton label="Explore our services" href="#services" variant="outline" />
            </motion.div>
          </motion.div>

          {/* ---------- Emblem ---------- */}
          <motion.div
            style={{ y: visualY, scale: visualScale }}
            className="w-full md:w-[42%] [perspective:1200px]"
          >
            <motion.div
              onMouseMove={handleTilt}
              onMouseLeave={() => {
                tiltX.set(0);
                tiltY.set(0);
              }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.25 }}
              className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] md:max-w-[440px]"
            >
              <Emblem />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: copyOpacity }}
        className="absolute inset-x-0 bottom-7 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[0.75rem] md:text-[0.64rem] uppercase tracking-[0.24em] text-ink-faint">
            Scroll
          </span>
          <span className="relative h-9 w-[1px] overflow-hidden bg-line-strong">
            <motion.span
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-brand"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/** Abstract brand emblem: concentric rings, orbiting nodes and a leaf core. */
function Emblem() {
  return (
    <div className="relative h-full w-full" style={{ transform: "translateZ(40px)" }}>
      {/* Soft plate */}
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-brand-wash via-paper to-paper-mint shadow-[0_40px_90px_-30px_rgba(13,122,81,0.45)]" />

      {/* Rotating conic ring */}
      <div
        className="animate-spin-slow absolute inset-0 rounded-full opacity-70"
        style={
          {
            "--spin-duration": "30s",
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--color-brand-lite) 70deg, transparent 150deg, var(--color-brand) 250deg, transparent 330deg)",
            WebkitMask:
              "radial-gradient(circle, transparent 61%, #000 62%, #000 65%, transparent 66%)",
            mask: "radial-gradient(circle, transparent 61%, #000 62%, #000 65%, transparent 66%)",
          } as React.CSSProperties
        }
      />

      {/* Counter-rotating dashed ring */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <g className="animate-spin-slow origin-center" style={{ "--spin-duration": "48s", animationDirection: "reverse" } as React.CSSProperties}>
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="0.6"
            strokeDasharray="2 7"
            opacity="0.5"
          />
        </g>
        <circle
          cx="100"
          cy="100"
          r="66"
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="0.8"
        />
        <circle
          cx="100"
          cy="100"
          r="48"
          fill="none"
          stroke="var(--color-brand-lite)"
          strokeWidth="0.8"
          opacity="0.7"
        />

        {/* Orbiting nodes */}
        <g className="animate-spin-slow origin-center" style={{ "--spin-duration": "22s" } as React.CSSProperties}>
          <circle cx="100" cy="18" r="3.4" fill="var(--color-brand)" />
          <circle cx="182" cy="100" r="2.2" fill="var(--color-brand-mid)" />
          <circle cx="100" cy="182" r="2.8" fill="var(--color-brand-lite)" />
          <circle cx="18" cy="100" r="2" fill="var(--color-brand)" opacity="0.6" />
        </g>

        {/* Leaf core */}
        <g transform="translate(100 100)">
          <path
            d="M0 34C0 8 12-12 34-20 30 8 18 27 0 34Z"
            fill="var(--color-brand)"
            opacity="0.92"
          />
          <path
            d="M0 34C0 8-12-12-34-20-30 8-18 27 0 34Z"
            fill="var(--color-brand-mid)"
            opacity="0.55"
          />
          <path
            d="M0 34V-26"
            stroke="var(--color-brand)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>
      </svg>

      {/* Floating stat chips */}
      {/* Kept inside the frame on small screens, allowed to break out on desktop. */}
      <FloatChip
        className="left-[2%] top-[18%] md:left-[-4%]"
        label="Bookings"
        value="+312%"
        delay={0.9}
      />
      <FloatChip
        className="right-[2%] top-[58%] md:right-[-6%]"
        label="Cost / lead"
        value="−41%"
        delay={1.15}
      />
    </div>
  );
}

function FloatChip({
  className,
  label,
  value,
  delay,
}: {
  className: string;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={`absolute ${className}`}
      style={{ transform: "translateZ(70px)" }}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="rounded-xl border border-line bg-paper/85 px-3.5 py-2.5 shadow-[0_14px_36px_-14px_rgba(6,33,26,0.28)] md:backdrop-blur-md"
      >
        <div className="font-mono text-[0.75rem] md:text-[0.6rem] uppercase tracking-[0.14em] text-ink-faint">
          {label}
        </div>
        <div className="text-lg font-semibold leading-tight text-brand">{value}</div>
      </motion.div>
    </motion.div>
  );
}
