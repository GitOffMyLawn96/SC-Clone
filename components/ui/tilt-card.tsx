"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
};

export function TiltCard({ children, className, maxTilt = 4, glowColor = "rgba(0,124,176,0.35)" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * maxTilt * 2;
    const rotateY = (x - 0.5) * maxTilt * 2;

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;

    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, ${glowColor}, transparent 60%)`;
      glowRef.current.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative transition-transform duration-200 ease-out", className)}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
