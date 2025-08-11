"use client";

import { useEffect, useRef, useState } from "react";
import "./services.css";
import Starfield from "../components/StarField/StarField";
import { gsap } from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";
import MorphingIcon from "../components/MorphingIcon/MorphingIcon";
import ScrollTriggerComponent from "../ScrollTrigger/page";

gsap.registerPlugin(MorphSVGPlugin);

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  const headingRef = useRef(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Display loading for 2 seconds

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

  // if (isLoading) {
  //   return <MorphingIcon />;
  // }

  useGSAP(() => {
    const heading = headingRef.current;

    const tl = gsap.timeline();

    // tl.set(heading, { opacity: 0, y: "100%" });

    // tl.to(heading, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   delay: 3.2,
    // });
  });

  return (
    // <div className="h-[945px] w-full overflow-hidden">
    //   <div className="h-full relative">
    //     <Starfield
    //       starCount={1500}
    //       starColor={[255, 255, 255]}
    //       speedFactor={1}
    //       backgroundColor="#282828"
    //       randomDriftFactor={0.5}
    //     />
    //     {/* <div className="h-[1403px] w-full absolute left-0 right-0 top-[50%] rounded-[50%] bg-[#282828] glow-ring"></div>
    //         <div className="border w-[60%] h-[700px] rounded-[50%] absolute left-1/2 -translate-x-1/2 top-1/2 glow-ring-2"></div> */}
    //     <div className="text-center absolute top-[22%] left-1/2 -translate-x-1/2 font-semibold text-8xl tracking-[52px]">
    //       <h1>SHOWCASE</h1>
    //     </div>

    //     <svg
    //       width="100%"
    //       height="100%"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <defs>
    //         <filter
    //           id="orangeShadow"
    //           x="-50%"
    //           y="-50%"
    //           width="200%"
    //           height="200%"
    //         >
    //           <feDropShadow
    //             dx="0"
    //             dy="0"
    //             stdDeviation="3"
    //             floodColor="#fe9227b3"
    //             floodOpacity="1"
    //           />
    //         </filter>
    //       </defs>
    //       <g filter="url(#orangeShadow)">
    //         <line
    //           ref={lineRef}
    //           x1="-110"
    //           y1="10"
    //           x2="100"
    //           y2="10.1"
    //           stroke="#fe9227"
    //           strokeWidth={0.01}
    //           style={{display: 'none'}}
    //         />
    //         <ellipse
    //           ref={ellipseRef}
    //           cx="12"
    //           cy="25"
    //           rx="26"
    //           ry="13"
    //           fill="#282828"
    //           stroke="#fe9227b3"
    //           strokeWidth="0.01"
    //         >

    //         </ellipse>
    //       </g>
    //     </svg>

    //     {/* animation for the svg above */}
    //                   {/*
    //               <animate
    //                 attributeName="rx"
    //                 from="26"
    //                 to="20"
    //                 dur="1.5s"
    //                 fill="freeze"
    //               />
    //               <animate
    //                 attributeName="ry"
    //                 from="13"
    //                 to="20"
    //                 dur="1.5s"
    //                 fill="freeze"
    //               />

    //               <animate
    //                 attributeName="cy"
    //                 from="25"
    //                 to="0"
    //                 dur="1.5s"
    //                 fill="freeze"
    //               /> */}

    //     {/* <svg
    //           width="100%"
    //           height="100%"
    //           viewBox="0 0 100 100"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <defs>
    //             <filter
    //               id="orangeShadow"
    //               x="-50%"
    //               y="-50%"
    //               width="200%"
    //               height="200%"
    //             >
    //               <feDropShadow
    //                 dx="0"
    //                 dy="0"
    //                 stdDeviation="6"
    //                 floodColor="#fe9227b3"
    //                 floodOpacity="1"
    //               />
    //             </filter>
    //           </defs> */}

    //     {/* <g filter="url(#orangeShadow)">
    //             <path fill="#282828" stroke="#fe9227b3" strokeWidth="0.05">
    //               <animateTransform
    //                 attributeName="transform"
    //                 type="translate"
    //                 from="0 40"
    //                 to="0 0"
    //                 dur="1.5s"
    //                 fill="freeze"
    //               />
    //               <animate
    //                 attributeName="d"
    //                 dur="3.5s"
    //                 fill="freeze"
    //                 values="
    // M50,70
    //           m-110,50
    //           a110,70 0 1,0 220,0
    //           a110,70 0 1,0 -220,0;

    //           M-55,0
    //           h220
    //           v140
    //           h-220
    //           z
    //         "
    //               />
    //             </path>
    //           </g> */}

    //     {/* <g filter="url(#orangeShadow)">
    //             <path
    //               fill="#282828"
    //               stroke="#fe9227b3"
    //               strokeWidth="0.05"
    //               d="M50,70
    //           m-110,50
    //           a110,70 0 1,0 220,0
    //           a110,70 0 1,0 -220,0;
    //         "
    //             ></path>
    //           </g> */}
    //     {/* </svg> */}
    //   </div>
    // </div>
    <>
      {/* <MorphingIcon /> */}
      <ScrollTriggerComponent />
      {/* <div className="h-[945px] w-full overflow-hidden">
        <div
          ref={headingRef}
          className="text-center absolute top-[22%] left-1/2 -translate-x-1/2 font-semibold text-8xl tracking-[52px]">
          <h1>SERVICES</h1>
        </div>
      </div> */}
    </>

    // SERVICES SECTION
    // <div className="h-[945px] w-full overflow-hidden">
    //   <div className="text-center absolute top-[22%] left-1/2 -translate-x-1/2 font-semibold text-8xl tracking-[52px]">
    //     <h1>SERVICES</h1>
    //   </div>
    // </div>
  );
};

export default page;
