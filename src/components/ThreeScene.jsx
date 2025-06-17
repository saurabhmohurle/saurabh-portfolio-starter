import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

function RotatingEarth() {
  // Load Earth texture from public folder or URL
  const texture = useLoader(TextureLoader, "https://raw.githubusercontent.com/ajaychandran123/react-threejs-earth/main/earthmap1k.jpg");
  const earthRef = useRef();

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() / 6; // slow rotation
  });

  return (
    <mesh ref={earthRef} position={[-2, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function GlowingCube() {
  const cubeRef = useRef();

  useFrame(({ clock }) => {
    cubeRef.current.rotation.x = clock.getElapsedTime() / 3;
    cubeRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <mesh ref={cubeRef} position={[2, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={"#0ff"} emissive={"#0ff"} emissiveIntensity={0.5} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingEarth />
        <GlowingCube />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
