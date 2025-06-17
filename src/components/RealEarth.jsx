import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export default function RealEarth(props) {
  const earth = useGLTF("/models/earth.glb");
  return <primitive object={earth.scene} scale={1.5} {...props} />;
}
