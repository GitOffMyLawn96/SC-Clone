"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Payload = {
  id: string;
  name: string;
  description: string;
  specs: string[];
  color: string;
  icon: string;
  image?: string;
};

const payloads: Payload[] = [
  {
    id: "lidar",
    name: "LiDAR",
    description:
      "Generate precise 3D point clouds and terrain models with the stability and payload headroom required for production-grade scanning across forests, mines, and construction sites.",
    specs: [
      "Dense point cloud capture",
      "Terrain modeling and DTM/DSM",
      "Vegetation penetration",
      "Sub-centimeter accuracy",
    ],
    color: "var(--color-blue)",
    icon: "◈",
  },
  {
    id: "rgb",
    name: "RGB Camera",
    description:
      "High-resolution visual capture for orthomosaic mapping, infrastructure inspection, progress tracking, and asset documentation with repeatable precision.",
    specs: [
      "61 MP resolution",
      "Mechanical shutter",
      "RTK geotagging",
      "Nadir and oblique modes",
    ],
    color: "var(--color-blue-light)",
    icon: "◉",
  },
  {
    id: "thermal",
    name: "Thermal",
    description:
      "Detect heat anomalies, energy losses, and equipment faults with radiometric thermal imaging. Optimized for building inspection, solar farm analysis, and night operations.",
    specs: [
      "640 x 512 resolution",
      "Radiometric data export",
      "Temperature measurement",
      "Dual visual + thermal overlay",
    ],
    color: "var(--color-gold)",
    icon: "◐",
  },
  {
    id: "spectral",
    name: "Spectral",
    description:
      "Multi- and hyperspectral imaging for advanced environmental analysis, crop health assessment, water quality monitoring, and research-grade data collection.",
    specs: [
      "Multi/hyperspectral bands",
      "NDVI and vegetation indices",
      "Calibrated reflectance",
      "Research-grade output",
    ],
    color: "#4ade80",
    icon: "◆",
  },
];

export function PayloadCarousel() {
  const [activeId, setActiveId] = useState(payloads[0].id);
  const active = payloads.find((p) => p.id === activeId) ?? payloads[0];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Payload Flexibility"
            title="One Mount, Four Missions"
            description="Swap sensors between flights with a tool-free quick-release interface."
          />
        </Reveal>

        {/* Tab bar */}
        <div className="mt-12 flex flex-wrap gap-2">
          {payloads.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                activeId === p.id
                  ? "border border-white/20 bg-white/10 text-white"
                  : "border border-white/5 bg-white/[0.02] text-white/40 hover:text-white/60"
              }`}
              style={
                activeId === p.id
                  ? { boxShadow: `0 0 20px ${p.color}20` }
                  : undefined
              }
            >
              <span className="mr-2">{p.icon}</span>
              {p.name}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="relative mt-8 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-2"
            >
              {/* Payload image */}
              <div
                className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-xl border border-white/8"
                style={{
                  background: `radial-gradient(circle at center, ${active.color}08, transparent 70%), rgba(255,255,255,0.02)`,
                }}
              >
                {active.image ? (
                  <>
                    <Image
                      src={active.image}
                      alt={`${active.name} payload`}
                      fill
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-4 p-12">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10"
                      style={{ background: `${active.color}10` }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7 text-white/20"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p
                        className="text-lg font-light uppercase tracking-[0.08em]"
                        style={{ color: active.color }}
                      >
                        {active.name}
                      </p>
                      <p className="mt-1 text-[11px] font-extralight text-white/20">
                        Payload photo placeholder
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <p className="text-lg font-extralight leading-8 text-white/60">
                  {active.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {active.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-3 text-sm font-extralight text-white/70"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: active.color }}
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
