"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/lib/hooks/use-mouse-parallax";
import { useAdaptiveQuality } from "@/lib/hooks/use-adaptive-quality";
import { useWebGLAvailable } from "@/lib/hooks/use-webgl-available";
import { useElementInView } from "@/lib/hooks/use-element-in-view";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Container } from "@/components/layout/container";

const Scene = dynamic(
  () => import("@/components/three/drone-scene").then((mod) => mod.DroneScene),
  { ssr: false },
);

const ease = [0.22, 1, 0.36, 1] as const;

function StaggeredTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="text-5xl font-extralight uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-7xl lg:text-8xl xl:text-9xl">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={false}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.15 + i * 0.08,
            duration: 0.7,
            ease,
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

const pillars = [
  { value: "Pay-Per-Use", desc: "Commercial access that keeps capital focused on delivery." },
  { value: "Auterion", desc: "Modern avionics and integration flexibility." },
  { value: "C3", desc: "Certification-ready for compliant deployment." },
];

export function CinematicHero() {
  const mouse = useMouseParallax();
  const quality = useAdaptiveQuality();
  const webgl = useWebGLAvailable();
  const sectionRef = useRef<HTMLElement>(null);
  const heroInView = useElementInView(sectionRef);

  const show3D = quality.tier !== "poster" && webgl;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 min-h-[50vh]">
        {show3D ? (
          <Scene
            reducedEffects={quality.tier === "low"}
            enablePostFX={quality.postProcessing}
            enableParticles={quality.particleCount > 0}
            particleCount={quality.particleCount}
            mouseX={mouse.x}
            mouseY={mouse.y}
            enableOrbit={false}
            dpr={quality.dpr}
            frameloop={heroInView ? "always" : "never"}
          />
        ) : (
          <div className="relative h-full min-h-[50vh] w-full">
            <Image
              src="/higdhra-poster.svg"
              alt="HIGHDRA drone system"
              fill
              priority
              className="object-cover opacity-60"
            />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000f2b] via-[#000f2b]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#000f2b]/80 via-transparent to-transparent" />
      </div>

      {/* Content overlay — initial={false} keeps copy visible if JS is slow or blocked (e.g. LAN dev without allowedDevOrigins) */}
      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-32 pt-40">
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-blue-light)]"
        >
          High-Performance Drone Platform
        </motion.p>

        <StaggeredTitle text="The HIGHDRA. Built For Real Work." />

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease }}
          className="mt-8 max-w-2xl text-lg font-extralight leading-8 text-white/60"
        >
          A new generation of high-performance drones for teams that need
          real-world endurance, heavy payload support, modular integration,
          and a commercial model built around how serious operations actually run.
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <ShimmerButton href="/contact">Request Quote</ShimmerButton>
          <ShimmerButton href="/highdra" variant="secondary">
            Explore HIGHDRA
          </ShimmerButton>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease }}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          {pillars.map((p) => (
            <div key={p.value} className="border-l border-white/10 pl-5">
              <p className="text-2xl font-extralight uppercase tracking-[0.08em] text-white lg:text-3xl">
                {p.value}
              </p>
              <p className="mt-2 text-sm font-extralight leading-6 text-white/45">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
