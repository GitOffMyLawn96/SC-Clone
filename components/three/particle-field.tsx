"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type { Points as PointsType } from "three";

type ParticleFieldProps = {
  count?: number;
  spread?: number;
  size?: number;
  color?: string;
  speed?: number;
};

function generatePositions(count: number, spread: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * spread;
    arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
    arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  return arr;
}

export function ParticleField({
  count = 200,
  spread = 12,
  size = 0.015,
  color = "#fcb900",
  speed = 0.08,
}: ParticleFieldProps) {
  const ref = useRef<PointsType>(null);
  const [positions] = useState(() => generatePositions(count, spread));

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.1;

    const pos = ref.current.geometry.attributes.position;
    if (!pos) return;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(state.clock.elapsedTime * speed + i) * 0.0004;
    }
    pos.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}
