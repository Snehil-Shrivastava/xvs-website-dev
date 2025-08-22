"use client";

import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

import { useControls } from "leva";

const Model2 = (props: any) => {
  const { scene } = useGLTF("/assests/models/bmw_m4_competition_m_package.glb");
  // @ts-ignore
//   const sceneRef = useRef(null);

//   const materialProps = useControls({
//     thickness: {value:0.5},
//     transmission: { value:0.1 },
//   });

//   useEffect(() => {
//     scene.traverse((child) => {
//       if ((child as any).isMesh) {
//         (child as any).material = <MeshTransmissionMaterial {...materialProps} />;
//       }
//     });
//   }, [scene]);

  return <primitive object={scene} {...props} />;
};

export default Model2;
