"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type ScrollProgressOptions = {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
};

export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!triggerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: options.start ?? "top bottom",
      end: options.end ?? "bottom top",
      scrub: options.scrub ?? true,
      pin: options.pin ?? false,
      onUpdate: (self) => setProgress(self.progress),
      onEnter: options.onEnter,
      onLeave: options.onLeave,
    });

    return () => trigger.kill();
  }, [options.start, options.end, options.scrub, options.pin, options.onEnter, options.onLeave]);

  return { triggerRef, progress };
}

export function useGsapScrollTrigger(
  callback: (tl: gsap.core.Timeline, trigger: HTMLElement) => void,
  deps: unknown[] = [],
) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      callback(tl, triggerRef.current!);
    }, triggerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return triggerRef;
}
