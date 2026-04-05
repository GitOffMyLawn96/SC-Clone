"use client";

import { useSyncExternalStore } from "react";

export type QualityTier = "high" | "medium" | "low" | "poster";

export type QualityConfig = {
  tier: QualityTier;
  dpr: [number, number];
  shadows: boolean;
  postProcessing: boolean;
  particleCount: number;
  scrubSmoothing: number;
};

const configs: Record<QualityTier, QualityConfig> = {
  high: {
    tier: "high",
    dpr: [1, 2],
    shadows: true,
    postProcessing: true,
    particleCount: 200,
    scrubSmoothing: 0.6,
  },
  medium: {
    tier: "medium",
    dpr: [1, 1.5],
    shadows: true,
    postProcessing: false,
    particleCount: 80,
    scrubSmoothing: 1,
  },
  low: {
    tier: "low",
    dpr: [1, 1],
    shadows: false,
    postProcessing: false,
    particleCount: 0,
    scrubSmoothing: 1.5,
  },
  poster: {
    tier: "poster",
    dpr: [1, 1],
    shadows: false,
    postProcessing: false,
    particleCount: 0,
    scrubSmoothing: 2,
  },
};

function detectTier(): QualityTier {
  if (typeof window === "undefined") return "medium";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return "poster";

  const nav = navigator as Navigator & { deviceMemory?: number };
  const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
  const lowCpu = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const mobileWidth = window.innerWidth < 768;

  if (lowMemory && lowCpu) return "low";
  if (lowMemory || lowCpu || mobileWidth) return "medium";
  return "high";
}

let cachedConfig: QualityConfig | null = null;

function getSnapshot(): QualityConfig {
  if (!cachedConfig) {
    cachedConfig = configs[detectTier()];
  }
  return cachedConfig;
}

function getServerSnapshot(): QualityConfig {
  return configs.medium;
}

function subscribe(_onStoreChange: () => void): () => void {
  return () => {};
}

export function useAdaptiveQuality(): QualityConfig {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
