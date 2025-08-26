// "use client";

// import React, { useEffect, useRef } from "react";
// // @ts-ignore
// import { useAnimations, useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { MTLLoader, OBJLoader } from "three-stdlib";

// export function Model(props: any) {
//   const group = useRef(null);
//   const { scene, animations } = useGLTF("/assests/models/glass_bunny.glb");
//   const { actions } = useAnimations(animations, group);

//   // const obj = useLoader(OBJLoader, "/assests/models/eyeball.obj", (loader) => {
//   //       materials.preload();
//   //       loader.setMaterials(materials);
//   //     });

//   useEffect(() => {
//     scene.traverse((child) => {
//       if ((child as any).isMesh) {
//         child.castShadow = true
//         child.receiveShadow = true
//       }
//     })
//   }, [scene])

//   // useEffect(() => {
//   //   if (actions && animations.length > 0) {
//   //     actions[animations[0].name]?.reset().fadeIn(0.5).play();
//   //   }
//   // }, [actions, animations]);

//   useEffect(() => {
//     // @ts-ignore
//     actions[Object.keys(actions)]?.play()
//   }, [actions])

//   // @ts-ignore
//   return <primitive object={scene} scale={1.2} />;
// }

// // Optional: Preload the model for faster loading on subsequent renders

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props: any) {
  const group = useRef(null);
  const { nodes, materials, animations } = useGLTF("/UI_UX.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty001" position={[0, 0.331, 0]} scale={0.699} />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          position={[-2.566, -2.049, -2.677]}
          rotation={[0.507, -0.45, -0.981]}
          scale={20}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Plane002.geometry}
          // @ts-ignore
          material={nodes.Plane002.material}
          position={[-30.481, -6.697, 27.203]}
          scale={28.494}
        />
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          // @ts-ignore
          geometry={nodes.Plane006.geometry}
          // @ts-ignore
          material={nodes.Plane006.material}
          position={[21.101, -6.697, -18.046]}
          scale={22.809}
        />
        <group
          name="Plane"
          position={[-0.296, -0.464, -0.001]}
          rotation={[0, 0, -Math.PI / 9]}
        >
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane003_1.geometry}
            material={materials["Glass shder 2"]}
          />
          <mesh
            name="Plane003_2"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane003_2.geometry}
            material={materials["Frost Glass"]}
          />
        </group>
        <group
          name="Plane003"
          position={[-0.511, 0.132, -0.526]}
          rotation={[0, 0, -Math.PI / 9]}
        >
          <mesh
            name="Plane005_1"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane005_1.geometry}
            material={materials["Glass shder 2"]}
          />
          <mesh
            name="Plane005_2"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane005_2.geometry}
            material={materials["Frost Glass"]}
          />
        </group>
        <group
          name="Plane004"
          position={[0.476, -0.228, -0.001]}
          rotation={[0, 0, -Math.PI / 9]}
        >
          <mesh
            name="Plane006_1"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane006_1.geometry}
            material={materials["Glass shder 2"]}
          />
          <mesh
            name="Plane006_2"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane006_2.geometry}
            material={materials["Frost Glass"]}
          />
        </group>
        <group
          name="Plane005"
          position={[-0.511, 0.132, 0.524]}
          rotation={[0, 0, -Math.PI / 9]}
        >
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane007.geometry}
            material={materials["Glass shder 2"]}
          />
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane007_1.geometry}
            material={materials["Frost Glass"]}
          />
        </group>
        <group name="Empty" rotation={[0, 0, 1.222]} />
      </group>
    </group>
  );
}

useGLTF.preload("/UI_UX.glb");
