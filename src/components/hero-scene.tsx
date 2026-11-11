"use client";

import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";

function EnergyCore() {
  const core = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.16;
      core.current.rotation.x += delta * 0.08;
    }
    if (ring.current) ring.current.rotation.z -= delta * 0.12;
  });

  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.24} floatIntensity={0.32}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.08, 5]} />
          <MeshDistortMaterial color="#7965dc" emissive="#153e55" emissiveIntensity={0.8} roughness={0.22} metalness={0.42} distort={0.24} speed={1.5} />
        </mesh>
      </Float>
      <mesh ref={ring} rotation={[1.1, 0.3, 0.2]}>
        <torusGeometry args={[1.58, 0.012, 8, 140]} />
        <meshBasicMaterial color="#65dce8" transparent opacity={0.62} />
      </mesh>
      <mesh rotation={[0.35, 1.1, 0.8]}>
        <torusGeometry args={[1.82, 0.008, 8, 140]} />
        <meshBasicMaterial color="#a58aff" transparent opacity={0.42} />
      </mesh>
      <pointLight position={[2, 2, 2]} intensity={2.2} color="#7e70ef" distance={6} />
    </group>
  );
}

export function HeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.35]} frameloop={reducedMotion ? "demand" : "always"} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}>
        <ambientLight intensity={0.8} />
        <Stars radius={28} depth={18} count={360} factor={2} saturation={0} fade speed={reducedMotion ? 0 : 0.18} />
        <EnergyCore />
      </Canvas>
    </div>
  );
}
