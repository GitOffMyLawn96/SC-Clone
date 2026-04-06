"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMouseParallax } from "@/lib/hooks/use-mouse-parallax";
import { useAdaptiveQuality } from "@/lib/hooks/use-adaptive-quality";
import { useWebGLAvailable } from "@/lib/hooks/use-webgl-available";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const Scene = dynamic(
  () => import("@/components/three/drone-scene").then((mod) => mod.DroneScene),
  { ssr: false },
);

const stats = [
  { value: "35 min", label: "Flight Time", x: "right-[8%]", y: "top-[18%]" },
  { value: "10 kg", label: "Payload", x: "right-[5%]", y: "bottom-[35%]" },
  { value: "2,000", label: "Battery Cycles", x: "left-[5%]", y: "bottom-[30%]" },
  { value: "C3", label: "Certified", x: "left-[8%]", y: "top-[22%]" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HighdraHero() {
  const mouse = useMouseParallax();
  const quality = useAdaptiveQuality();
  const webgl = useWebGLAvailable();
  const show3D = quality.tier !== "poster" && webgl;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 3D background */}
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
          />
        ) : (
          <div className="relative h-full min-h-[50vh] w-full">
            <Image
              src="/higdhra-poster.svg"
              alt="HIGHDRA"
              fill
              priority
              className="object-cover opacity-50"
            />
          </div>
        )}
      </div>

      {/* Darkening overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Floating stat callouts */}
      <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease }}
            className={`absolute ${stat.x} ${stat.y}`}
          >
            <div className="rounded-lg border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-sm">
              <AnimatedCounter
                value={stat.value}
                delay={1 + i * 0.2}
                className="text-2xl font-extralight uppercase tracking-wider text-white"
              />
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Foreground title + subtitle */}
      <div className="relative z-[6] text-center">
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-gold)]"
        >
          Product
        </motion.p>
        <motion.h2
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease }}
          className="mt-4 text-6xl font-light uppercase tracking-[0.06em] text-white md:text-8xl"
        >
          HIGHDRA
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease }}
          className="mx-auto mt-6 max-w-2xl text-lg font-extralight leading-8 text-white/55"
        >
          A high-performance drone system for teams that need real payload
          capability, modular deployment, and credible endurance.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
}
