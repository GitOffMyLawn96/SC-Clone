"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo } from "react";
import { useMouseParallax } from "@/lib/hooks/use-mouse-parallax";
import { useAdaptiveQuality } from "@/lib/hooks/use-adaptive-quality";
import { useWebGLAvailable } from "@/lib/hooks/use-webgl-available";

const Scene = dynamic(
  () => import("@/components/three/drone-scene").then((mod) => mod.DroneScene),
  {
    ssr: false,
    loading: () => <HeroPoster label="Loading 3D scene" />,
  },
);

function HeroPoster({ label }: { label?: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,124,176,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(252,185,0,0.1),transparent_28%),rgba(255,255,255,0.03)]">
      <Image
        src="/higdhra-poster.svg"
        alt="HIGHDRA drone system"
        fill
        priority
        className="object-cover"
      />
      {label ? (
        <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/8 bg-black/40 px-4 py-2 text-center text-xs font-extralight uppercase tracking-[0.28em] text-white/50 backdrop-blur">
          {label}
        </div>
      ) : null}
    </div>
  );
}

type DroneHeroProps = {
  className?: string;
  exploded?: boolean;
  showLabels?: boolean;
  cameraPosition?: [number, number, number];
  cameraTarget?: [number, number, number];
  enableOrbit?: boolean;
};

export function DroneHero({
  className,
  exploded,
  showLabels,
  cameraPosition,
  cameraTarget,
  enableOrbit,
}: DroneHeroProps) {
  const mouse = useMouseParallax();
  const quality = useAdaptiveQuality();
  const webgl = useWebGLAvailable();

  const calloutItems = useMemo(
    () => [
      "Interactive 3D — rotate, zoom, explore",
      "Adaptive rendering for all devices",
      "Real-time lighting and material effects",
    ],
    [],
  );

  if (quality.tier === "poster" || !webgl) {
    return (
      <div className={className}>
        <div className="relative h-[420px] overflow-hidden rounded-xl border border-white/8 md:h-[620px]">
          <HeroPoster />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="relative h-[420px] overflow-hidden rounded-xl border border-white/8 bg-[rgba(255,255,255,0.02)] md:h-[620px]">
        <Scene
          reducedEffects={quality.tier === "low"}
          enablePostFX={quality.postProcessing}
          enableParticles={quality.particleCount > 0}
          particleCount={quality.particleCount}
          mouseX={mouse.x}
          mouseY={mouse.y}
          exploded={exploded}
          showLabels={showLabels}
          cameraPosition={cameraPosition}
          cameraTarget={cameraTarget}
          enableOrbit={enableOrbit}
          dpr={quality.dpr}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(0,15,43,0.9))]" />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {calloutItems.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-[13px] font-extralight text-white/55"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
