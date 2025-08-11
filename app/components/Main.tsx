"use client";

import ReelSection from "./Sections/ReelsSection/ReelSection";
import StatsSection from "./Sections/StatsSection/StatsSection";

import SwiperCarousel from "./Sections/CarouselSection/SwiperCarusel";
import Reviews from "./Sections/ReviewsSection/Reviews";

import React, { Suspense, useRef } from "react";
import * as motion from "motion/react-client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import xvsAnimatedWebm from '../../public/assests/videos&gifs/Loader V1.webm'
import xvsAnimatedGif from '../../public/assests/videos&gifs/Loader V1.gif'
import xvsAnimatedGif2 from '../../public/assests/videos&gifs/Loader-V1-unscreen.gif'

import xvsAnimatedGif3 from '../../public/LoaderV1Unscreen.gif'

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

function SpinningBox() {
  // @ts-ignore
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.y += 0.003; // Rotate around Y-axis
    }
  });

  return <Model ref={meshRef} position={[0, 0, 0]} scale={[3, 3, 3]} />;
}

const Main = () => {
  return (
    <section className="w-2/3 mx-auto mt-[157px] text-center relaive">
      <header className="relative">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute left-[25%] text-[22px] font-light"
        >
          Creating Unforgettable Design
        </motion.p>
        <h1 className="text-[#f59748] font-semibold text-[14rem]/[12rem] inline mr-[180px]">
          e
        </h1>
        <h1 className="text-[#f59748] font-semibold text-[14rem]/[12rem] inline">
          perience
        </h1>
        <div className="w-[320px] absolute top-[-80px] left-[70px]">
          {/* <Canvas
            className="mx-auto"
            style={{ width: "220px", height: "320px" }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={10} />
              <directionalLight
                position={[-2, -5, 0]}
                intensity={10}
                color={"orange"}
              />
              <OrthographicCamera position={[0, 0, -1.5]} zoom={0}>
                <SpinningBox />
              </OrthographicCamera> */}
              {/* <axesHelper /> */}
              {/* <gridHelper /> */}
              {/* <GizmoHelper>
                <GizmoViewport />
              </GizmoHelper> */}
              {/* <OrbitControls /> */}
              {/* <Environment preset="city" />
            </Suspense>
          </Canvas> */}
          {/* <video>
            <source src='LoaderV1.mp4' type="video/mp4" />
          </video> */}
          {/* <Image src={xvsAnimatedGif2} alt="" className="select-none scale-[1.5]" /> */}
          {/* @ts-ignore */}
          <AnimatedJSON />
        </div>
      </header>
      <ReelSection />
      <StatsSection />
      <SwiperCarousel />
      <Reviews />
    </section>
  );
};

export default Main;
