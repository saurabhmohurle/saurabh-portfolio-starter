
import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Earth() {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.002));

  return (
    <Sphere args={[1.2, 64, 64]} ref={mesh} position={[-2, 0, 0]}>
      <MeshDistortMaterial
        color="#3f83f8"
        attach="material"
        distort={0.2}
        speed={2}
        roughness={0.1}
      />
    </Sphere>
  );
}
