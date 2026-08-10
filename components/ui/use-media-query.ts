"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Subscribes to a media query. matchMedia is an external store, so
 * useSyncExternalStore is the right primitive — it avoids a setState-in-effect
 * and stays consistent during concurrent renders.
 *
 * Mobile-first: the server snapshot is false, so anything gated on this must be
 * behaviour only. Never gate content on it — what it hides would be missing
 * from the served HTML and therefore from search results.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onStoreChange);
      return () => mql.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Tailwind's `md` breakpoint — where the sticky card stack becomes viable. */
export const useIsDesktop = () => useMediaQuery("(min-width: 768px)");
