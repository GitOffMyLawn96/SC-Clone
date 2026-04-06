"use client";

import { useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useAdaptiveQuality } from "@/lib/hooks/use-adaptive-quality";
import { useWebGLAvailable } from "@/lib/hooks/use-webgl-available";
import { Container } from "@/components/layout/container";

const Scene = dynamic(
  () => import("@/components/three/drone-scene").then((mod) => mod.DroneScene),
  { ssr: false },
);

type BreakpointData = {
  label: string;
  title: string;
  description: string;
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
};

const breakpoints: BreakpointData[] = [
  {
    label: "Overview",
    title: "Engineered Precision",
    description:
      "Every surface, joint, and component of the HIGHDRA reflects a system designed around operational reliability rather than trade-show aesthetics.",
    cameraPosition: [7, 4, 7],
    cameraTarget: [0, 0.5, 0],
  },
  {
    label: "Core Body",
    title: "Modular Architecture",
    description:
      "The reinforced central body houses avionics, power distribution, and payload interfaces in a compact, field-serviceable package.",
    cameraPosition: [3, 2.5, 4],
    cameraTarget: [0, 0.8, 0],
  },
  {
    label: "Drive System",
    title: "Precision Rotor Assembly",
    description:
      "Six independent drive units deliver redundant thrust with minimal vibration, enabling stable flight even under partial motor failure.",
    cameraPosition: [5, 5, 3],
    cameraTarget: [2.5, 0.8, 2.5],
  },
  {
    label: "Payload Bay",
    title: "Sensor Flexibility",
    description:
      "The universal payload mount supports LiDAR, RGB, thermal, and spectral sensors with tool-free swapping between missions.",
    cameraPosition: [4, -1, 5],
    cameraTarget: [0, -0.5, 0],
  },
  {
    label: "Full View",
    title: "Ready For Real Work",
    description:
      "From the rotors to the landing gear, every detail is designed for teams that measure success in uptime, not brochure specs.",
    cameraPosition: [8, 5, 8],
    cameraTarget: [0, 0.5, 0],
  },
];

export function DroneScrollSequence() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const quality = useAdaptiveQuality();
  const webgl = useWebGLAvailable();
  const [activeIndex, setActiveIndex] = useState(0);

  const use3D = quality.tier !== "poster" && webgl;

  useLayoutEffect(() => {
    const root = wrapperRef.current;
    if (!root || !use3D) return;

    const ctx = gsap.context(() => {
      const sections = root.querySelectorAll<HTMLElement>("[data-seq-panel]");

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: `+=${breakpoints.length * 100}%`,
        pin: true,
        pinReparent: false,
        scrub: quality.scrubSmoothing,
        onUpdate: (self) => {
          const idx = Math.min(
            breakpoints.length - 1,
            Math.floor(self.progress * breakpoints.length),
          );
          setActiveIndex(idx);
        },
      });

      sections.forEach((section, i) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            scrollTrigger: {
              trigger: root,
              start: `${(i / breakpoints.length) * 100}% top`,
              end: `${((i + 0.5) / breakpoints.length) * 100}% top`,
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, [use3D, quality.scrubSmoothing]);

  if (quality.tier === "poster") return null;

  if (!webgl) {
    return (
      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
              The platform
            </p>
            <h2 className="mt-4 text-3xl font-light uppercase tracking-[0.04em] text-white md:text-4xl">
              Engineered as a complete system
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] font-extralight leading-7 text-white/55">
              Scroll-driven 3D is unavailable in this browser; here is the same story as static sections.
            </p>
          </div>
          <div className="grid gap-10">
            {breakpoints.map((bp) => (
              <article
                key={bp.label}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-8 md:p-10"
              >
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  {bp.label}
                </p>
                <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                  {bp.title}
                </h3>
                <p className="mt-4 text-[15px] font-extralight leading-7 text-white/55">{bp.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  const active = breakpoints[activeIndex];

  return (
    <section ref={wrapperRef} className="relative h-screen overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Scene
          reducedEffects={quality.tier === "low"}
          enablePostFX={quality.postProcessing}
          enableParticles={false}
          cameraPosition={active.cameraPosition}
          cameraTarget={active.cameraTarget}
          enableOrbit={false}
          dpr={quality.dpr}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content panels */}
      <Container className="relative z-20 flex h-full items-center">
        <div className="max-w-lg">
          {breakpoints.map((bp, i) => (
            <div
              key={bp.label}
              data-seq-panel
              className="transition-opacity duration-500"
              style={{
                position: "absolute",
                opacity: activeIndex === i ? 1 : 0,
                pointerEvents: activeIndex === i ? "auto" : "none",
              }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
                {bp.label}
              </p>
              <h2 className="mt-4 text-4xl font-light uppercase tracking-[0.04em] text-white md:text-5xl lg:text-6xl">
                {bp.title}
              </h2>
              <p className="mt-6 text-lg font-extralight leading-8 text-white/60">
                {bp.description}
              </p>
            </div>
          ))}

          {/* Progress dots */}
          <div className="absolute bottom-12 left-0 flex gap-3">
            {breakpoints.map((bp, i) => (
              <div
                key={bp.label}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-8 bg-[var(--color-gold)]"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
