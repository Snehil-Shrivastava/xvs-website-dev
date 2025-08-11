'use client'

import React, { useRef } from 'react';
// @ts-ignore
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

export function Model(props: any) {
  const { scene } = useGLTF('/UI_UX.glb'); // Path to your .glb file

// const obj = useLoader(OBJLoader, '/assests/models/Elements3d.blend')

  scene.traverse((child) => {
    // @ts-ignore
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // @ts-ignore
  return <primitive object={scene} {...props} />;
}

// Optional: Preload the model for faster loading on subsequent renders
