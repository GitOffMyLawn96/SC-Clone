"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
};

function parseNumeric(val: string): { num: number; prefix: string; suffix: string; hasComma: boolean } | null {
  const match = val.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  if (!match) return null;
  const raw = match[2];
  return {
    prefix: match[1],
    num: parseInt(raw.replace(/,/g, ""), 10),
    suffix: match[3],
    hasComma: raw.includes(","),
  };
}

function formatNumber(n: number, hasComma: boolean): string {
  if (!hasComma) return String(Math.round(n));
  return Math.round(n).toLocaleString("en-US");
}

export function AnimatedCounter({ value, className, duration = 1.8, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const parsed = parseNumeric(value);

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;

        if (parsed) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: parsed.num,
            duration,
            delay,
            ease: "power2.out",
            snap: { val: 1 },
            onUpdate: () => {
              setDisplayed(`${parsed.prefix}${formatNumber(obj.val, parsed.hasComma)}${parsed.suffix}`);
            },
            onComplete: () => {
              ref.current?.classList.add("counter-done");
            },
          });
        } else {
          let i = 0;
          const chars = value.split("");
          const interval = setInterval(() => {
            i++;
            setDisplayed(chars.slice(0, i).join(""));
            if (i >= chars.length) {
              clearInterval(interval);
              ref.current?.classList.add("counter-done");
            }
          }, 120);
        }
      },
    });

    return () => trigger.kill();
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
