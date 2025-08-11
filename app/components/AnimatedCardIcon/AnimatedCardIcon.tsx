'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'


function AnimatedModel() {
  const { scene, animations } = useGLTF('/UI_UX.glb')
  const { actions } = useAnimations(animations, scene)
  
  useEffect(() => {
    actions['YourAnimationName']?.play()
  }, [actions])

  return <primitive object={scene} />
}

export default function AnimatedCardIcon() {
  return (
    <Canvas>
      <AnimatedModel />
    </Canvas>
  )
}
