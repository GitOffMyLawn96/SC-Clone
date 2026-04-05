"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { Group, Mesh } from "three";
import { useMemo, useRef } from "react";

type DroneModelProps = {
  reducedEffects?: boolean;
};

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

function DroneModel({ reducedEffects = false }: DroneModelProps) {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.16;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.75) * 0.08;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  const armConfigs = useMemo(
    () =>
      [
        [2.8, 0.25, 2.8],
        [-2.8, 0.25, 2.8],
        [2.8, 0.25, -2.8],
        [-2.8, 0.25, -2.8],
      ] as [number, number, number][],
    [],
  );

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.22}>
      <group ref={groupRef} position={[0, 0.65, 0]}>
        <mesh ref={coreRef} castShadow receiveShadow>
          <boxGeometry args={[3.4, 1.1, 2.15]} />
          <meshStandardMaterial
            color="#0f1522"
            metalness={0.92}
            roughness={0.18}
            emissive={reducedEffects ? "#000000" : "#19386a"}
            emissiveIntensity={reducedEffects ? 0 : 0.28}
          />
        </mesh>

        <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.45, 1.2]} />
          <meshStandardMaterial color="#111928" metalness={0.82} roughness={0.16} />
        </mesh>

        <mesh position={[0, -0.78, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.55, 0.35, 1.25]} />
          <meshStandardMaterial
            color="#101826"
            metalness={0.78}
            roughness={0.22}
            emissive="#d8aa2f"
            emissiveIntensity={reducedEffects ? 0.06 : 0.18}
          />
        </mesh>

        {armConfigs.map((position) => (
          <group key={position.join("-")} position={position}>
            <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[3.5, 0.22, 0.34]} />
              <meshStandardMaterial color="#1b2435" metalness={0.88} roughness={0.18} />
            </mesh>
            <Rotor position={[0, 0.15, 0]} rotation={[0, 0, 0]} />
          </group>
        ))}

        <mesh position={[0, -1.35, 0.95]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 2.4, 16]} />
          <meshStandardMaterial color="#566074" metalness={0.55} roughness={0.42} />
        </mesh>
        <mesh position={[0, -1.35, -0.95]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 2.4, 16]} />
          <meshStandardMaterial color="#566074" metalness={0.55} roughness={0.42} />
        </mesh>
      </group>
    </Float>
  );
}

export function DroneScene({ reducedEffects = false }: { reducedEffects?: boolean }) {
  return (
    <Canvas
      shadows={!reducedEffects}
      dpr={reducedEffects ? [1, 1.2] : [1, 1.8]}
      camera={{ position: [7, 4, 7], fov: 34 }}
      className="h-full w-full"
    >
      <color attach="background" args={["#05070b"]} />
      <fog attach="fog" args={["#05070b", 10, 24]} />
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
        intensity={reducedEffects ? 0.8 : 1.8}
        color="#5b8cff"
      />
      <spotLight
        position={[0, 5, -8]}
        angle={0.42}
        penumbra={1}
        intensity={reducedEffects ? 0.5 : 1.2}
        color="#f2c84c"
      />
      <DroneModel reducedEffects={reducedEffects} />
      <ContactShadows
        position={[0, -1.52, 0]}
        opacity={reducedEffects ? 0.3 : 0.46}
        scale={14}
        blur={2.2}
        far={8}
      />
      <OrbitControls
        enablePan={false}
        minDistance={8}
        maxDistance={12}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.85}
        autoRotate
        autoRotateSpeed={0.58}
      />
    </Canvas>
  );
}
