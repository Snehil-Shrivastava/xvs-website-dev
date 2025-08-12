// "use client";

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
    <section className="2xl:w-2/3 xl:w-[70%] lg:w-[90%] mx-auto mt-[157px] text-center relaive">
      <header className="relative">
        <p
          className="absolute left-[28%] max-[2560px]:left-[20%] 2xl:text-[1.5rem]/[1.5rem] xl:text-[1.3rem]/[1.3rem] lg:text-[1.2rem] font-light"
        >
          Creating Unforgettable Design
        </p>
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-[#f59748] font-semibold 2xl:text-[14rem]/[12rem] xl:text-[12rem]/[10rem] lg:text-[10rem]/[11rem] inline">
              e
            </h1>
            <div className="2xl:w-[180px] xl:w-[150px] lg:w-[140px] overflow-hidden">
              <AnimatedJSON />
            </div>
          </div>
          <h1 className="text-[#f59748] font-semibold 2xl:text-[14rem]/[12rem] xl:text-[12rem]/[10rem] lg:text-[10rem]/[11rem] inline">
            perience
          </h1>
        </div>
        {/* <div className="w-[320px] absolute top-[-80px] left-[16.3rem]">
            <AnimatedJSON />
          </div> */}
      </header>
      <ReelSection />
      <StatsSection />

      <SwiperCarousel />
      <Reviews />
    </section>
  );
};

export default Main;
