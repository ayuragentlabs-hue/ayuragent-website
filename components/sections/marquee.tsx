"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

/** Wraps a value into [min, max) — keeps the marquee looping seamlessly. */
function wrapValue(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function Row({
  items,
  baseVelocity,
}: {
  items: string[];
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // Scroll speed bends the marquee's own speed and skews it slightly.
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], {
    clamp: false,
  });
  const skew = useTransform(smoothVelocity, [-2000, 0, 2000], [4, 0, -4], {
    clamp: true,
  });

  const x = useTransform(baseX, (v) => `${wrapValue(-50, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    // Flip travel direction to match the direction of scroll.
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div style={{ skewX: skew }} className="flex whitespace-nowrap">
      <motion.div style={{ x }} className="flex shrink-0 gap-14 pr-14">
        {/* Duplicated twice so the -50% wrap is seamless. */}
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-14 text-[1.05rem] font-medium tracking-tight text-ink-soft"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-brand-lite" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

const ROW_ONE = [
  "Meta Ads",
  "Google Ads",
  "Landing Pages",
  "WhatsApp Automation",
  "Local SEO",
  "Brand Identity",
];

const ROW_TWO = [
  "Reels & Content",
  "CRM Pipelines",
  "Consultation Funnels",
  "Analytics",
  "Retention Journeys",
  "Clinic Websites",
];

export default function Marquee() {
  return (
    <section className="marquee-mask relative border-y border-line bg-paper-soft py-7">
      <div className="flex flex-col gap-4">
        <Row items={ROW_ONE} baseVelocity={-1.6} />
        <Row items={ROW_TWO} baseVelocity={1.6} />
      </div>
    </section>
  );
}
