"use client";

import ReelSection from "./Sections/ReelsSection/ReelSection";
import StatsSection from "./Sections/StatsSection/StatsSection";

import SwiperCarousel from "./Sections/CarouselSection/SwiperCarusel";
import Reviews from "./Sections/ReviewsSection/Reviews";

import Gif3d from '../../public/assests/videos&gifs/3D Product Render And Animation-png.gif'

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

const Main = () => {
  return (
    <section className="2xl:w-2/3 xl:w-[70%] lg:w-[90%] max-[1024px]:w-[90%] mx-auto max-[1906px]:pt-[200px] max-[1441px]:pt-[180px] max-[1026px]:pt-[180px] max-[769px]:pt-[180px] max-[426px]:pt-[60px] text-center relaive">
      <header className="relative pointer-events-none max-[426px]:w-[95%] max-[426px]:mx-auto">
        <p className="max-[1906px]:text-[2rem] max-[1441px]:text-[1.5rem] max-[1026px]:text-[1.2rem] max-[769px]:text-[0.875rem] max-[426px]:text-[0.75rem]">
          Creating Unforgettable Design
        </p>
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-[#f59748] font-semibold max-[1906px]:text-[14rem]/[12rem] max-[1441px]:text-[12rem]/[14rem] max-[1025px]:text-[10rem]/[11rem] max-[769px]:text-[7.5rem]/[10rem] inline max-[426px]:text-[62px]/[80px]">
              e
            </h1>
            <div className="2xl:w-[180px] max-[1441px]:w-[170px] max-[1025px]:w-[140px] max-[769px]:w-[80px] max-[426px]:w-[45px] overflow-hidden">
              <AnimatedJSON />
            </div>
          </div>
          <h1 className="text-[#f59748] font-semibold max-[1906px]:text-[14rem]/[12rem] max-[1441px]:text-[12rem]/[14rem] max-[1025px]:text-[10rem]/[11rem] max-[769px]:text-[7.5rem]/[10rem] inline max-[426px]:text-[62px]/[80px]">
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
