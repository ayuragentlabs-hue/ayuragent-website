/** Shared easing + timing so every section moves with the same hand. */

// Typed as a mutable tuple so it satisfies framer-motion's `Easing` type.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SOFT: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

export const VIEWPORT = { once: true, margin: "-12% 0px -12% 0px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
