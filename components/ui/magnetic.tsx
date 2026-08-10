"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Cursor-magnetic wrapper — the element leans toward the pointer while it is
 * inside the hover radius, then springs back on leave.
 */
export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Per-character vertical flip label. The visible row slides up and out while a
 * duplicate row slides in from below, each character offset from the last.
 */
export function CharFlip({ label, className }: { label: string; className?: string }) {
  const chars = label.split("");
  return (
    <span
      className={`relative inline-block overflow-hidden align-middle ${className ?? ""}`}
      aria-label={label}
    >
      <span className="flex" aria-hidden="true">
        {chars.map((c, i) => (
          <span key={i} className="relative block overflow-hidden">
            <span
              className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 18}ms` }}
            >
              {c === " " ? " " : c}
            </span>
            <span
              className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 18}ms` }}
            >
              {c === " " ? " " : c}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

/** Primary pill button with the char-flip label baked in. */
export function FlipButton({
  label,
  href = "#contact",
  variant = "solid",
  className,
}: {
  label: string;
  href?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    solid: "bg-brand text-white hover:bg-ink",
    outline: "border border-line-strong text-ink hover:border-brand hover:text-brand",
    light: "bg-white text-ink hover:bg-brand-wash",
  }[variant];

  return (
    <Magnetic>
      <a
        href={href}
        className={`group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-colors duration-300 ${styles} ${className ?? ""}`}
      >
        <CharFlip label={label} />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M1 7h11M7.5 2.5 12 7l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </Magnetic>
  );
}
