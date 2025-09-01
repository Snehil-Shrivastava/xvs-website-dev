"use client";

import {
  ContactShadows,
  Environment,
  MeshTransmissionMaterial,
  useAnimations,
  useEnvironment,
  useGLTF,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Model2 = (props: any) => {
  const group = useRef(null);

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
    color: { value: "#f79839" },
    // envMapIntensity: {value: 1},
    // transmissionResolution: {value: 1},
  });

  const env = useEnvironment({
    files: "/public/assests/HDR/hdr1.hdr",
  });
  const { nodes, materials, animations } = useGLTF(
    "/public/assests/models/X.glb"
  );
  const { actions } = useAnimations(animations, group);
  // @ts-ignore
  //   const sceneRef = useRef(null);

  //   const materialProps = useControls({
  //     thickness: {value:0.5},
  //     transmission: { value:0.1 },
  //   });

  // const gltf = useLoader(GLTFLoader, '/assests/models/x5/X 5.gltf')

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().fadeIn(0.5).play();
    }
  }, [actions, animations]);

  // return <primitive ref={group} object={scene} {...props} />;
  return (
    <group ref={group}>
      <group name="Scene">
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Curve.geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={2}
        >
          {/*<boxGeometry/>*/}
          <ContactShadows />
          <Environment map={env} />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </group>
  );
};

export default Model2;
