"use client";

import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Model2 = (props: any) => {
  const group = useRef(null);
  // const { scene, animations } = useGLTF("/assests/models/X 3.gltf");
  // const { actions } = useAnimations(animations, group);
  // @ts-ignore
  //   const sceneRef = useRef(null);

  //   const materialProps = useControls({
  //     thickness: {value:0.5},
  //     transmission: { value:0.1 },
  //   });

  const gltf = useLoader(GLTFLoader, '/assests/models/x5/X 5.gltf')

  // useEffect(() => {
  //   if (actions && animations.length > 0) {
  //     actions[animations[0].name]?.reset().fadeIn(0.5).play();
  //   }
  // }, [actions, animations]);

  return <primitive ref={group} object={gltf.scene} {...props} />;
};

export default Model2;
