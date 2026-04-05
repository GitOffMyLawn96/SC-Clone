"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function BatteryRace() {
  const sectionRef = useRef<HTMLElement>(null);
  const highdraBarRef = useRef<HTMLDivElement>(null);
  const typicalBarRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => setTriggered(true),
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!triggered) return;

    if (highdraBarRef.current) {
      gsap.fromTo(
        highdraBarRef.current,
        { width: "0%" },
        { width: "100%", duration: 2, ease: "power2.out" },
      );
    }

    if (typicalBarRef.current) {
      gsap.fromTo(
        typicalBarRef.current,
        { width: "0%" },
        { width: "20%", duration: 2, ease: "power2.out" },
      );
    }

    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 2, ease: "back.out(2)" },
      );
    }
  }, [triggered]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Battery Endurance"
            title="Power That Lasts"
            description="In-house battery technology delivers 5x the cycle life of typical commercial drone batteries."
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          {/* HIGHDRA bar */}
          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-white">
                HIGHDRA
              </span>
              <span className="text-3xl font-extralight text-[var(--color-gold)]">
                2,000 <span className="text-sm text-white/40">cycles</span>
              </span>
            </div>
            <div className="h-6 overflow-hidden rounded-full bg-white/5">
              <div
                ref={highdraBarRef}
                className="h-full w-0 rounded-full bg-gradient-to-r from-[var(--color-blue)] via-[var(--color-blue-light)] to-[var(--color-gold)]"
              />
            </div>
          </div>

          {/* Typical bar */}
          <div>
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-white/50">
                Typical Commercial
              </span>
              <span className="text-3xl font-extralight text-white/40">
                400 <span className="text-sm text-white/30">cycles</span>
              </span>
            </div>
            <div className="h-6 overflow-hidden rounded-full bg-white/5">
              <div
                ref={typicalBarRef}
                className="h-full w-0 rounded-full bg-white/15"
              />
            </div>
          </div>

          {/* 5x badge */}
          <div className="flex justify-center">
            <div
              ref={badgeRef}
              className="inline-flex scale-0 items-center gap-3 rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/[0.06] px-8 py-4 opacity-0"
            >
              <span className="text-5xl font-bold text-[var(--color-gold)]">5x</span>
              <span className="text-sm font-extralight leading-5 text-white/60">
                longer battery life<br />
                than typical platforms
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
