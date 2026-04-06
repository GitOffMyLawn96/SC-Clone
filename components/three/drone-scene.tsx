"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, Html } from "@react-three/drei";
import { Group, Mesh, Vector3, MathUtils } from "three";
import { useMemo, useRef } from "react";
import { PostFX } from "./post-fx";
import { ParticleField } from "./particle-field";

type DroneSceneProps = {
  reducedEffects?: boolean;
  enablePostFX?: boolean;
  enableParticles?: boolean;
  particleCount?: number;
  mouseX?: number;
  mouseY?: number;
  scrollProgress?: number;
  exploded?: boolean;
  showLabels?: boolean;
  cameraPosition?: [number, number, number];
  cameraTarget?: [number, number, number];
  enableOrbit?: boolean;
  /** Device pixel ratio range; defaults by quality tier if omitted */
  dpr?: [number, number];
  frameloop?: "always" | "demand" | "never";
};

function MouseParallaxCamera({
  mouseX = 0,
  mouseY = 0,
  basePosition,
}: {
  mouseX: number;
  mouseY: number;
  basePosition: [number, number, number];
}) {
  const { camera } = useThree();
  const target = useRef(new Vector3(...basePosition));

  useFrame(() => {
    target.current.set(
      basePosition[0] + mouseX * 1.2,
      basePosition[1] - mouseY * 0.6,
      basePosition[2],
    );
    camera.position.lerp(target.current, 0.05);
    camera.lookAt(0, 0.5, 0);
  });

  return null;
}

function ScrollCamera({
  cameraPosition,
  cameraTarget,
}: {
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
}) {
  const { camera } = useThree();
  const posTarget = useRef(new Vector3(...cameraPosition));
  const lookTarget = useRef(new Vector3(...cameraTarget));

  useFrame(() => {
    posTarget.current.set(...cameraPosition);
    lookTarget.current.set(...cameraTarget);
    camera.position.lerp(posTarget.current, 0.04);

    const currentLook = new Vector3();
    camera.getWorldDirection(currentLook);
    camera.lookAt(lookTarget.current);
  });

  return null;
}

function Rotor({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const bladeRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (bladeRef.current) {
      bladeRef.current.rotation.y += delta * 12;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.12, 32]} />
        <meshStandardMaterial color="#0e1320" metalness={0.86} roughness={0.26} />
      </mesh>
      <group ref={bladeRef} position={[0, 0.12, 0]}>
        <mesh castShadow rotation={[0, 0, 0]}>
          <boxGeometry args={[1.65, 0.05, 0.12]} />
          <meshStandardMaterial color="#7c8cac" metalness={0.72} roughness={0.22} />
        </mesh>
        <mesh castShadow rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[1.65, 0.05, 0.12]} />
          <meshStandardMaterial color="#7c8cac" metalness={0.72} roughness={0.22} />
        </mesh>
      </group>
    </group>
  );
}

type ArmConfig = {
  restPos: [number, number, number];
  explodeDir: [number, number, number];
};

const armConfigs: ArmConfig[] = [
  { restPos: [2.8, 0.25, 2.8], explodeDir: [1.8, 1.2, 1.8] },
  { restPos: [-2.8, 0.25, 2.8], explodeDir: [-1.8, 1.2, 1.8] },
  { restPos: [2.8, 0.25, -2.8], explodeDir: [1.8, 1.2, -1.8] },
  { restPos: [-2.8, 0.25, -2.8], explodeDir: [-1.8, 1.2, -1.8] },
];

const armLabels = [
  "Precision Rotor Assembly",
  "Carbon Fiber Arm",
  "Redundant Motor System",
  "Quick-Detach Mount",
];

function DroneModel({
  reducedEffects = false,
  exploded = false,
  showLabels = false,
  autoRotate = true,
}: {
  reducedEffects?: boolean;
  exploded?: boolean;
  showLabels?: boolean;
  autoRotate?: boolean;
}) {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const bodyExplodeRef = useRef<Group>(null);
  const payloadRef = useRef<Group>(null);
  const legRefs = useRef<Group[]>([]);

  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.16;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.75) * 0.08;
    }

    if (coreRef.current && autoRotate) {
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }

    const explodeT = exploded ? 1 : 0;
    if (bodyExplodeRef.current) {
      bodyExplodeRef.current.position.y = MathUtils.lerp(
        bodyExplodeRef.current.position.y,
        explodeT * 1.5,
        0.06,
      );
    }
    if (payloadRef.current) {
      payloadRef.current.position.y = MathUtils.lerp(
        payloadRef.current.position.y,
        -0.78 + explodeT * -2.0,
        0.06,
      );
    }
    legRefs.current.forEach((leg, i) => {
      if (leg) {
        const zSign = i === 0 ? 1 : -1;
        leg.position.z = MathUtils.lerp(
          leg.position.z,
          0.95 * zSign + explodeT * 1.2 * zSign,
          0.06,
        );
        leg.position.y = MathUtils.lerp(leg.position.y, -1.35 + explodeT * -1.5, 0.06);
      }
    });
  });

  return (
    <Float speed={autoRotate ? 1.1 : 0} rotationIntensity={autoRotate ? 0.12 : 0} floatIntensity={autoRotate ? 0.22 : 0}>
      <group ref={groupRef} position={[0, 0.65, 0]}>
        <group ref={bodyExplodeRef}>
          <mesh ref={coreRef} castShadow receiveShadow>
            <boxGeometry args={[3.4, 1.1, 2.15]} />
            <meshStandardMaterial
              color="#0f1522"
              metalness={0.92}
              roughness={0.18}
              emissive={reducedEffects ? "#000000" : "#003d58"}
              emissiveIntensity={reducedEffects ? 0 : 0.28}
            />
          </mesh>
          <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.2, 0.45, 1.2]} />
            <meshStandardMaterial color="#111928" metalness={0.82} roughness={0.16} />
          </mesh>
          {showLabels && exploded && (
            <Html position={[0, 1.8, 0]} center distanceFactor={10}>
              <div className="whitespace-nowrap rounded border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
                Modular Core Body
              </div>
            </Html>
          )}
        </group>

        <group ref={payloadRef} position={[0, -0.78, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.55, 0.35, 1.25]} />
            <meshStandardMaterial
              color="#101826"
              metalness={0.78}
              roughness={0.22}
              emissive="#d8aa2f"
              emissiveIntensity={reducedEffects ? 0.06 : 0.18}
            />
          </mesh>
          {showLabels && exploded && (
            <Html position={[0, -0.6, 0]} center distanceFactor={10}>
              <div className="whitespace-nowrap rounded border border-[var(--color-gold)]/40 bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--color-gold)] backdrop-blur">
                Modular Payload Bay
              </div>
            </Html>
          )}
        </group>

        {armConfigs.map((arm, i) => {
          const explodedPos: [number, number, number] = [
            arm.restPos[0] + (exploded ? arm.explodeDir[0] : 0),
            arm.restPos[1] + (exploded ? arm.explodeDir[1] : 0),
            arm.restPos[2] + (exploded ? arm.explodeDir[2] : 0),
          ];

          return (
            <ArmGroup
              key={i}
              targetPosition={explodedPos}
              label={showLabels && exploded && i === 0 ? armLabels[i] : undefined}
            />
          );
        })}

        {[0.95, -0.95].map((z, i) => (
          <group
            key={z}
            ref={(el) => {
              if (el) legRefs.current[i] = el;
            }}
            position={[0, -1.35, z]}
          >
            <mesh castShadow>
              <cylinderGeometry args={[0.06, 0.06, 2.4, 16]} />
              <meshStandardMaterial color="#566074" metalness={0.55} roughness={0.42} />
            </mesh>
          </group>
        ))}
        {showLabels && exploded && (
          <Html position={[0, -3.2, 0.95]} center distanceFactor={10}>
            <div className="whitespace-nowrap rounded border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
              Landing Gear
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

function ArmGroup({
  targetPosition,
  label,
}: {
  targetPosition: [number, number, number];
  label?: string;
}) {
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.x = MathUtils.lerp(ref.current.position.x, targetPosition[0], 0.06);
    ref.current.position.y = MathUtils.lerp(ref.current.position.y, targetPosition[1], 0.06);
    ref.current.position.z = MathUtils.lerp(ref.current.position.z, targetPosition[2], 0.06);
  });

  return (
    <group ref={ref} position={targetPosition}>
      <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[3.5, 0.22, 0.34]} />
        <meshStandardMaterial color="#1b2435" metalness={0.88} roughness={0.18} />
      </mesh>
      <Rotor position={[0, 0.15, 0]} rotation={[0, 0, 0]} />
      {label && (
        <Html position={[0, 1.2, 0]} center distanceFactor={10}>
          <div className="whitespace-nowrap rounded border border-[var(--color-blue)]/40 bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--color-blue-light)] backdrop-blur">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

export function DroneScene({
  reducedEffects = false,
  enablePostFX = false,
  enableParticles = false,
  particleCount = 200,
  mouseX = 0,
  mouseY = 0,
  scrollProgress,
  exploded = false,
  showLabels = false,
  cameraPosition,
  cameraTarget,
  enableOrbit = true,
  dpr: dprProp,
  frameloop = "always",
}: DroneSceneProps) {
  const hasScrollCamera = cameraPosition && cameraTarget;
  const hasMouseParallax = !hasScrollCamera && (mouseX !== 0 || mouseY !== 0);
  const defaultCamPos: [number, number, number] = [7, 4, 7];
  const dpr =
    dprProp ?? (reducedEffects ? ([1, 1.2] as [number, number]) : ([1, 1.8] as [number, number]));

  return (
    <Canvas
      shadows={reducedEffects ? false : "percentage"}
      dpr={dpr}
      frameloop={frameloop}
      gl={{ antialias: !reducedEffects, powerPreference: "high-performance" }}
      camera={{ position: defaultCamPos, fov: 34 }}
      className="h-full w-full"
    >
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 24]} />
      <ambientLight intensity={reducedEffects ? 1.4 : 0.85} />
      <directionalLight
        castShadow={!reducedEffects}
        position={[8, 10, 5]}
        intensity={4.6}
        color="#ffffff"
      />
      <spotLight
        position={[-8, 8, 6]}
        angle={0.32}
        penumbra={1}
        intensity={reducedEffects ? 0.6 : 1.0}
        color="#007cb0"
      />
      <spotLight
        position={[0, 5, -8]}
        angle={0.42}
        penumbra={1}
        intensity={reducedEffects ? 0.5 : 1.2}
        color="#fcb900"
      />

      {hasMouseParallax && (
        <MouseParallaxCamera mouseX={mouseX} mouseY={mouseY} basePosition={defaultCamPos} />
      )}
      {hasScrollCamera && (
        <ScrollCamera cameraPosition={cameraPosition} cameraTarget={cameraTarget} />
      )}

      <DroneModel
        reducedEffects={reducedEffects}
        exploded={exploded}
        showLabels={showLabels}
        autoRotate={!hasScrollCamera}
      />

      {enableParticles && <ParticleField count={particleCount} />}

      <ContactShadows
        position={[0, -1.52, 0]}
        opacity={reducedEffects ? 0.3 : 0.46}
        scale={14}
        blur={2.2}
        far={8}
      />

      {enableOrbit && !hasScrollCamera && !hasMouseParallax && (
        <OrbitControls
          enablePan={false}
          minDistance={8}
          maxDistance={12}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.85}
          autoRotate
          autoRotateSpeed={0.58}
        />
      )}

      {enablePostFX && !reducedEffects && <PostFX />}
    </Canvas>
  );
}
