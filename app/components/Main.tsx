"use client";

import ReelSection from "./Sections/ReelsSection/ReelSection";
import StatsSection from "./Sections/StatsSection/StatsSection";

import SwiperCarousel from "./Sections/CarouselSection/SwiperCarusel";
import Reviews from "./Sections/ReviewsSection/Reviews";

// import React, { Suspense, useRef } from "react";
import * as motion from "motion/react-client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import xvsAnimatedWebm from "../../public/assests/videos&gifs/Loader V1.webm";
import xvsAnimatedGif from "../../public/assests/videos&gifs/Loader V1.gif";
import xvsAnimatedGif2 from "../../public/assests/videos&gifs/Loader-V1-unscreen.gif";

import xvsAnimatedGif3 from "../../public/LoaderV1Unscreen.gif";

import "./main.css";

import {
  OrbitControls,
  Environment,
  GizmoHelper,
  GizmoViewport,
  GizmoViewcube,
  OrthographicCamera,
} from "@react-three/drei";
import { Model } from "../components/Model/Model"; // Import your Model component
import Image from "next/image";
import AnimatedJSON from "./AnimatedJSON/AnimatedJSON";
import AnimatedCardIcon from "./AnimatedCardIcon/AnimatedCardIcon";
import MagicBento from "./ReactBits/MagicBento/MagicBento";
import CardGlow from "./ReactBits/CardGlow/CardGlow";
import Model2 from "./Model/Model2";

// function SpinningBox() {
//   // @ts-ignore
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       // @ts-ignore
//       // meshRef.current.rotation.y += 0.003; // Rotate around Y-axis
//     }
//   });

//   return <Model ref={meshRef} position={[0, 0, 0]} scale={[3, 3, 3]} />;
// }

const Main = () => {
  return (
    <section className="2xl:w-2/3 xl:w-[70%] lg:w-[90%] max-[1024px]:w-[90%] mx-auto mt-[157px] text-center relaive">
      <header className="relative pointer-events-none max-[426px]:w-4/5 max-[426px]:mx-auto">
        <p className="absolute left-[28%] max-[2560px]:left-[20%] 2xl:text-[1.5rem]/[1.5rem] xl:text-[1.3rem]/[1.3rem] lg:text-[1.2rem] max-[1024px]:text-[0.75rem] max-[1024px]:top-[30px] max-[1024px]:left-[23%] font-light max-[769px]:text-[0.875rem] max-[769px]:left-[20%] max-[426px]:right-0 max-[426px]:left-auto  max-[426px]:w-[150px] max-[426px]:text-start  max-[426px]:top-[20px] max-[426px]:text-[0.85rem]">
          Creating Unforgettable Design
        </p>
        <div className="flex justify-center max-[426px]:flex-col">
          <div className="flex">
            <h1 className="text-[#f59748] font-semibold 2xl:text-[14rem]/[12rem] xl:text-[12rem]/[10rem] lg:text-[10rem]/[11rem] max-[1024px]:text-[7rem] max-[769px]:text-[7.5rem] max-[426px]:leading-[78px] inline">
              e
            </h1>
            <div className="2xl:w-[180px] xl:w-[150px] lg:w-[140px] max-[1024px]:w-[80px] overflow-hidden">
              <AnimatedJSON />
            </div>
          </div>
          <h1 className="text-[#f59748] font-semibold 2xl:text-[14rem]/[12rem] xl:text-[12rem]/[10rem] lg:text-[10rem]/[11rem] max-[1024px]:text-[7rem] max-[769px]:text-[7.5rem] inline max-[426px]:hidden">
            perience
          </h1>
          <h1 className="text-[#f59748] font-semibold 2xl:text-[14rem]/[12rem] xl:text-[12rem]/[10rem] lg:text-[10rem]/[11rem] max-[1024px]:text-[7rem] max-[426px]:leading-[78px] max-[426px]:text-start hidden max-[426px]:inline">
            perie
          </h1>{" "}
          <h1 className="text-[#f59748] font-semibold 2xl:text-[14rem]/[12rem] xl:text-[12rem]/[10rem] lg:text-[10rem]/[11rem] max-[1024px]:text-[7rem] max-[426px]:leading-[78px] max-[426px]:text-start hidden max-[426px]:inline">
            nce
          </h1>
        </div>
        {/* <div className="w-[320px] absolute top-[-80px] left-[16.3rem]">
            <AnimatedJSON />
          </div> */}
      </header>
      <ReelSection />
      <StatsSection />
      {/* <MagicBento
        textAutoHide={true}
        enableStars={false}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      /> */}

      {/* <div className="main">
        <h1>Interactive Card Glow Effect</h1>
        <p>Built with Next.js and React. Move your mouse over the cards.</p>
        <div className="cards">
          <CardGlow>
            <h2>Card One</h2>
            <p>
              The glow follows your mouse, illuminating the card and its
              borders.
            </p>
          </CardGlow>
          <CardGlow>
            <h2>Card Two</h2>
            <p>Notice how the gaps between cards also appear to light up.</p>
          </CardGlow>
        </div>
      </div> */}

      {/* <Canvas
        shadows
        camera={{ position: [0, 1, 1], fov: 50 }}
        style={{ height: "520px" }}
      >
        <ambientLight intensity={10} />
        <directionalLight
          position={[5, 5, 0]}
          castShadow
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          intensity={10}
        />
        <Model />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas> */}

      {/* <Canvas
        shadows
        camera={{ fov: 50 }}
        style={{ height: "520px" }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[5, 5, 0]}
          castShadow
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          intensity={1}
        />
        <Model2 />
        <OrbitControls />
        <Environment preset="apartment" />
      </Canvas> */}

      {/* <Canvas camera={{position: [0,5,20]}} style={{height: '520px'}}>
        <directionalLight intensity={2} position={[0, 3, 5]} />
        <Environment preset="city" />
        <OrbitControls />
        <Model2 />
      </Canvas> */}
      <SwiperCarousel />
      <Reviews />
    </section>
  );
};

export default Main;
