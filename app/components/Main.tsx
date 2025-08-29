"use client";

import ReelSection from "./Sections/ReelsSection/ReelSection";
import StatsSection from "./Sections/StatsSection/StatsSection";

import SwiperCarousel from "./Sections/CarouselSection/SwiperCarusel";
import Reviews from "./Sections/ReviewsSection/Reviews";

import Gif3d from "../../public/assests/videos&gifs/3D Product Render And Animation-png.gif";

// import React, { Suspense, useRef } from "react";
import * as motion from "motion/react-client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

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
  Grid,
} from "@react-three/drei";
import { Model } from "../components/Model/Model"; // Import your Model component
import Image from "next/image";
import AnimatedJSON from "./AnimatedJSON/AnimatedJSON";
import AnimatedCardIcon from "./AnimatedCardIcon/AnimatedCardIcon";
import MagicBento from "./ReactBits/MagicBento/MagicBento";
import CardGlow from "./ReactBits/CardGlow/CardGlow";
import Model2 from "./Model/Model2";
import localFont from "next/font/local";

// import spinningLambda from "../../public/assests/videos&gifs/X.gif";

const calSans = localFont({
  src: "../../public/fonts/CalSans-Regular.ttf",
});

const Main = () => {
  return (
    <section className="mx-auto max-sm:pt-[60px] text-center relative w-9/10 sm:max-lg:pt-[102px] lg:max-2xl:pt-[150px] min-[1536px]:max-[1906px]:pt-[200px] min-[1906px]:pt-[250px]">
      <header className="relative pointer-events-none w-[95%] mx-auto z-[66]">
        <p className="max-sm:text-[0.75rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] xl:max-2xl:text-[1.5rem] min-[1536px]:max-[1905px]:text-[1.5rem] min-[1905px]:text-[1.8rem] font-light">
          Creating Unforgettable Design
        </p>
        <div className="flex justify-center">
          <div className="flex">
            <h1
              className={`text-[#e88e00] inline text-[62px]/[80px] sm:max-lg:text-[7.75rem]/[9rem]  lg:max-xl:text-[9.375rem]/[10.625rem] xl:max-2xl:text-[13.125rem]/[13.5rem] min-[1536px]:max-[1905px]:text-[13.125rem]/[14rem] min-[1905px]:text-[15.6rem]/[17rem] ${calSans.className}`}
            >
              e
            </h1>
            {/* <div className="w-[45px] overflow-hidden sm:max-lg:w-20 lg:max-xl:w-34 xl:max-2xl:w-45 min-[1536px]:max-[1905px]:w-45 min-[1905px]:w-56 relative"> */}
            <div className="w-[45px] sm:max-lg:w-20 lg:max-xl:w-34 xl:max-2xl:w-[150px] min-[1536px]:max-[1905px]:w-45 min-[1905px]:w-56 relative overflow-visible">
              {/* <AnimatedJSON /> */}
              <Image
                className="absolute top-[15%] scale-[1]"
                src={Gif3d}
                alt=""
              />
            </div>
          </div>
          <h1
            className={`text-[#e88e00] inline text-[62px]/[80px] sm:max-lg:text-[7.75rem]/[9rem]  lg:max-xl:text-[9.375rem]/[10.625rem] xl:max-2xl:text-[13.125rem]/[13.5rem] min-[1536px]:max-[1905px]:text-[13.125rem]/[14rem] min-[1905px]:text-[15.6rem]/[17rem] ${calSans.className}`}
          >
            perience
          </h1>
        </div>
      </header>
      <ReelSection />
      <StatsSection />
      {/* <Image src={Gif3d} alt="gif" /> */}
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
        <Model />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas> */}

      {/* <Canvas shadows camera={{ fov: 40, position: [5, 0, 0] }} style={{ height: "520px" }}>
        <ambientLight intensity={10} />
        <directionalLight
          position={[5, 2, 0]}
          castShadow
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          intensity={10}
        />
        <Model2 />
        <EffectComposer>
          <DepthOfField
            focusDistance={0.02}
            focalLength={0.02}
            bokehScale={6}
            height={480}
          />
        </EffectComposer>
        <OrbitControls />
        <Grid cellColor={"#000"} castShadow />
        <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper>
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
