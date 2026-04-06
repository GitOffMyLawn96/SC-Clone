"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Tracks viewport intersection. Defaults to true until measured so the first
 * paint still mounts WebGL; switches off when scrolled away to pause the loop.
 */
export function useElementInView(ref: RefObject<Element | null>): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.06 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}
