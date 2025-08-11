"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import Starfield from "../StarField/StarField";

import "./MorphingIcon.css";

gsap.registerPlugin(MorphSVGPlugin);

const MorphingIcon = () => {
  const containerRef = useRef(null);
  const animationWrapperRef = useRef(null);

  const ellipseRef = useRef(null);
  const lineRef = useRef(null);

  const headingRef = useRef(null);
  const starsRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useGSAP(
    () => {
      // @ts-ignore
      const ellipse = ellipseRef.current;
      //   const ellipsePath = ellipseRef.current
      // @ts-ignore
      const line = lineRef.current;
      const wrapper = animationWrapperRef.current;

      const heading = headingRef.current;
      const stars = starsRef.current;

      if (!ellipse || !line || !wrapper) return;
      // if (!ellipsePath || !line || !wrapper) return;

      const tl = gsap.timeline();

      const ellipsePath = MorphSVGPlugin.convertToPath(ellipse);
      const linePath = MorphSVGPlugin.convertToPath(line);

      gsap.set(ellipsePath, { yPercent: 100 });
        tl.to(ellipsePath, {
          visibility: "visible",
          yPercent: 0,
          duration: 1,
        //   delay: 0.5,
          ease: "power2.inOut",
        });
      tl.to(ellipsePath, {
        duration: 1.5,
        delay: 0.5,
        // @ts-ignore
        morphSVG: linePath,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(line, { display: "inline" });
          // @ts-ignore
          ellipsePath.remove();
        },
      });
      tl.to(ellipsePath, {
        yPercent: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
      }, "<");
      tl.to(
        wrapper,
        {
          yPercent: -110,
          duration: 1.5,
          ease: "power2.in",
        },
        "<"
      );
      tl.to(
        heading,
        {
          opacity: 0,
          duration: 1,
          y: "-100%",
        },
        "<"
      );

      tl.set(wrapper, { display: "none" });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="h-[945px] w-full overflow-hidden relative"
    >
      <div ref={animationWrapperRef} className="h-full relative">
        <div ref={starsRef}>
          <Starfield
            starCount={1500}
            starColor={[255, 255, 255]}
            speedFactor={1}
            backgroundColor="#282828"
            randomDriftFactor={0.5}
          />
        </div>
        <div
          ref={headingRef}
          className="text-center absolute top-[22%] left-1/2 -translate-x-1/2 font-semibold text-8xl tracking-[52px]"
        >
          <h1>SHOWCASE</h1>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // We add preserveAspectRatio to control how the large viewBox fits
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="orangeShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2"
                floodColor="#fe9227b3"
                floodOpacity="1"
              />
            </filter>
          </defs>
          <g filter="url(#orangeShadow)">
            <line
              ref={lineRef}
              x1="-110"
              y1="10"
              x2="100"
              y2="10.1"
              stroke="#fe9227"
              strokeWidth={0.01}
              style={{ display: "none" }}
            />
            <ellipse
              ref={ellipseRef}
              cx="12"
              cy="26"
              rx="15"
              ry="13"
              fill="#282828"
              stroke="#fe9227b3"
              strokeWidth="0.01"
              style={{visibility: "hidden"}}
            />
          </g>
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-[220px] mask-div"></div>
      </div>
    </div>
  );
};

export default MorphingIcon;


