"use client";

import Lottie from "lottie-react";
import animationData from "./data.json";
import animationData2 from "./data2.json";
import xVS from './X.json'

import { Player } from "@lottiefiles/react-lottie-player";

const AnimatedJSON = () => {
  return (
    <Lottie animationData={xVS} loop={true} autoplay  className="scale-[1.5] origin-center"/>
    // <Player
    //   autoplay
    //   loop
    //   src={animationData}
    //   style={{ height: "300px", width: "300px" }}
    // />
  );
};

export default AnimatedJSON;
