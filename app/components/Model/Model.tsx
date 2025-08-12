"use client";

import React, { useEffect, useRef } from "react";
// @ts-ignore
import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";

export function Model(props: any) {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/mario.glb"); // Path to your .glb file
  const { actions } = useAnimations(animations, group);

  // const obj = useLoader(OBJLoader, '/assests/models/Elements3d.blend')

useEffect(() => {
  scene.traverse((child) => {
    if ((child as any).isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })
}, [scene])

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().fadeIn(0.5).play();
    }
  }, [actions, animations]);

  // @ts-ignore
  return <primitive ref={group} object={scene} {...props} />;
}

// Optional: Preload the model for faster loading on subsequent renders
