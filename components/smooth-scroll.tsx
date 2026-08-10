"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Root smooth-scroll provider. Every scroll-linked animation on the site reads
 * from the window scroll that Lenis drives, so this must wrap the whole tree.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
