"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const Scene = dynamic(
  () => import("@/components/three/drone-scene").then((mod) => mod.DroneScene),
  {
    ssr: false,
    loading: () => <HeroPoster label="Loading 3D scene" />,
  },
);

function HeroPoster({ label }: { label?: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/8 bg-[radial-gradient(circle_at_top,rgba(0,124,176,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(252,185,0,0.1),transparent_28%),rgba(255,255,255,0.03)]">
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

export function DroneHero() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [reducedEffects, setReducedEffects] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowMemory =
      "deviceMemory" in navigator &&
      typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === "number" &&
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 0) <= 4;
    const limitedCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

    const frame = window.requestAnimationFrame(() => {
      if (reducedMotion) {
        setReducedEffects(true);
        setCanRender3D(false);
        return;
      }

      setReducedEffects(lowMemory || limitedCpu);
      setCanRender3D(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const calloutItems = useMemo(
    () => [
      "Interactive 3D — rotate, zoom, explore",
      "Adaptive rendering for all devices",
      "Real-time lighting and material effects",
    ],
    [],
  );

  return (
    <div className="grid gap-4">
      <div className="relative h-[420px] overflow-hidden rounded-xl border border-white/8 bg-[rgba(255,255,255,0.02)] md:h-[620px]">
        {canRender3D ? <Scene reducedEffects={reducedEffects} /> : <HeroPoster />}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(0,15,43,0.9))]" />
      </div>
      <div className="grid gap-3 md:grid-cols-3">
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
