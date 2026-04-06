"use client";

import { useEffect, useState } from "react";

function probeWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: false }) ??
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: false });
    return !!gl;
  } catch {
    return false;
  }
}

/**
 * Client-only WebGL probe. Starts false to align with SSR, then updates after
 * mount so we can fall back to poster imagery when no GL context is available.
 */
export function useWebGLAvailable(): boolean {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOk(probeWebGL());
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return ok;
}
