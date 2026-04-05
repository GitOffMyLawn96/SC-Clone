"use client";

import { useEffect, useRef, useState } from "react";

type ParallaxState = { x: number; y: number };

export function useMouseParallax(smoothing = 0.08) {
  const target = useRef<ParallaxState>({ x: 0, y: 0 });
  const [position, setPosition] = useState<ParallaxState>({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let current = { x: 0, y: 0 };

    const tick = () => {
      current = {
        x: lerp(current.x, target.current.x, smoothing),
        y: lerp(current.y, target.current.y, smoothing),
      };
      setPosition({ x: current.x, y: current.y });
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf.current);
    };
  }, [smoothing]);

  return position;
}
