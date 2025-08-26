"use client";

import Lottie from "lottie-react";
import animationData from "./data.json";
import animationData2 from "./data2.json";
import xVS from './X.json'

import { Player } from "@lottiefiles/react-lottie-player";

import './animatedJSON.css'

const AnimatedJSON = () => {
  return (
    <Lottie animationData={xVS} loop={true} autoplay  className="2xl:scale-[2.4] max-[1441px]:scale-[2.8] max-[1024px]:inline svg-container"/>
    // <Player
    //   autoplay
    //   loop
    //   src={animationData}
    //   style={{ height: "300px", width: "300px" }}
    // />
  );
};

export default AnimatedJSON;
