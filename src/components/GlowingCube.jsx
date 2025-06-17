
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function GlowingCube({ position = [0, 0, 0] }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial emissive="#facc15" emissiveIntensity={0.8} color="#1e293b" />
    </mesh>
  );
}
