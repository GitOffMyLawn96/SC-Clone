"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useAdaptiveQuality } from "@/lib/hooks/use-adaptive-quality";
import { Container } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const Scene = dynamic(
  () => import("@/components/three/drone-scene").then((mod) => mod.DroneScene),
  { ssr: false },
);

type ExplorerSection = {
  eyebrow: string;
  title: string;
  description: string;
  stat?: { value: string; label: string };
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  exploded?: boolean;
};

const sections: ExplorerSection[] = [
  {
    eyebrow: "Overview",
    title: "Designed For The Field",
    description:
      "Every detail of the HIGHDRA reflects engineering priorities rooted in operational reality: fast deployment, modular maintenance, and repeatable performance across conditions.",
    stat: { value: "35 min", label: "Real-world flight time" },
    cameraPosition: [7, 4, 7],
    cameraTarget: [0, 0.5, 0],
  },
  {
    eyebrow: "Core Structure",
    title: "Reinforced Modular Body",
    description:
      "The carbon-reinforced central frame houses avionics, power distribution, and communication interfaces. Tool-free access panels enable rapid field service.",
    stat: { value: "10 kg", label: "Maximum payload" },
    cameraPosition: [3.5, 2, 4],
    cameraTarget: [0, 0.8, 0],
  },
  {
    eyebrow: "Architecture",
    title: "Exploded View",
    description:
      "See every modular component: quick-detach arms, hot-swap battery packs, universal payload mount, and redundant flight computers. Designed so parts can be replaced in minutes, not hours.",
    cameraPosition: [8, 6, 8],
    cameraTarget: [0, 0.5, 0],
    exploded: true,
  },
  {
    eyebrow: "Propulsion",
    title: "Six Redundant Drive Units",
    description:
      "Each motor assembly is independently controlled with automatic fail-safe redistribution. The hexacopter configuration maintains stable flight even with partial motor loss.",
    cameraPosition: [5.5, 5, 3],
    cameraTarget: [2.5, 0.8, 2.5],
  },
  {
    eyebrow: "Payload Integration",
    title: "Universal Sensor Mount",
    description:
      "The underside payload bay supports LiDAR, RGB, thermal, and spectral sensors through a standardized quick-release interface. Swap between missions without tools.",
    stat: { value: "4", label: "Sensor types supported" },
    cameraPosition: [4, -1, 5],
    cameraTarget: [0, -0.5, 0],
  },
];

export function HighdraExplorer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const quality = useAdaptiveQuality();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current || quality.tier === "poster") return;

    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: `+=${sections.length * 100}%`,
      pin: true,
      scrub: quality.scrubSmoothing,
      onUpdate: (self) => {
        const idx = Math.min(
          sections.length - 1,
          Math.floor(self.progress * sections.length),
        );
        setActiveIndex(idx);
      },
    });

    return () => trigger.kill();
  }, [quality.tier, quality.scrubSmoothing]);

  if (quality.tier === "poster") {
    return (
      <section className="py-20">
        <Container>
          <div className="grid gap-12">
            {sections.map((s) => (
              <div key={s.title} className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                  {s.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-light uppercase tracking-[0.04em] text-white">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] font-extralight leading-7 text-white/55">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const active = sections[activeIndex];

  return (
    <section ref={wrapperRef} className="relative h-screen overflow-hidden">
      {/* Right half: 3D canvas */}
      <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-1/2">
        <Scene
          reducedEffects={quality.tier === "low"}
          enablePostFX={quality.postProcessing}
          enableParticles={false}
          cameraPosition={active.cameraPosition}
          cameraTarget={active.cameraTarget}
          enableOrbit={false}
          exploded={active.exploded}
          showLabels={active.exploded}
        />
      </div>

      {/* Left half overlay for mobile, left panel for desktop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000f2b] via-[#000f2b]/80 to-transparent lg:w-[55%]" />

      {/* Content panels */}
      <div className="relative z-20 flex h-full items-center">
        <Container>
          <div className="max-w-lg">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="transition-all duration-500"
                style={{
                  position: "absolute",
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i ? "translateY(0)" : "translateY(20px)",
                  pointerEvents: activeIndex === i ? "auto" : "none",
                }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-blue-light)]">
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.04em] text-white lg:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-6 text-lg font-extralight leading-8 text-white/60">
                  {section.description}
                </p>
                {section.stat && (
                  <div className="mt-8 inline-block rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
                    <AnimatedCounter
                      value={section.stat.value}
                      delay={0.3}
                      className="text-3xl font-extralight uppercase tracking-wider text-white"
                    />
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                      {section.stat.label}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Progress indicator */}
            <div className="absolute bottom-12 left-0 flex gap-3">
              {sections.map((s, i) => (
                <div
                  key={s.title}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-8 bg-[var(--color-blue-light)]"
                      : i < activeIndex
                        ? "w-1.5 bg-[var(--color-blue)]/60"
                        : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
