"use client";

import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

type PostFXProps = {
  bloomIntensity?: number;
  vignetteOffset?: number;
  noiseOpacity?: number;
};

export function PostFX({
  bloomIntensity = 0.6,
  vignetteOffset = 0.3,
  noiseOpacity = 0.06,
}: PostFXProps) {
  return (
    <EffectComposer>
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Vignette offset={vignetteOffset} darkness={0.65} blendFunction={BlendFunction.NORMAL} />
      <Noise opacity={noiseOpacity} blendFunction={BlendFunction.SOFT_LIGHT} />
    </EffectComposer>
  );
}
