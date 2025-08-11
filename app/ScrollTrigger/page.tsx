"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import Starfield from "../components/StarField/StarField";

import "./scrolltrigger.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "../contact/page";
import Form from "next/form";
import SectionHeadingText from "../components/SectionHeadingText/SectionHeadingText";
import Image from "next/image";

import logo from "../../public/assests/xvs-logo-icon-lg.png";

import bgImg from "../../public/assests/contact-bg.png";
import MorphingIcon from "../components/MorphingIcon/MorphingIcon";
import AboutPage from "../about/page";
import RichText from "../components/RichText/RichText";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

const ScrollTriggerComponent = () => {
  const containerRef = useRef(null);
  const animationWrapperRef = useRef(null);

  const ellipseRef = useRef(null);
  const lineRef = useRef(null);

  const ellipsePathRef = useRef(null);

  const headingRef = useRef(null);
  const starsRef = useRef(null);

  const richTxtRef = useRef(null);

  const svgRef = useRef(null);

  const loadingRef = useRef(null);

  const testContainerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     // @ts-ignore
  //     const ellipse = ellipseRef.current;
  //     //   const ellipsePath = ellipseRef.current
  //     // @ts-ignore
  //     const line = lineRef.current;
  //     const wrapper = animationWrapperRef.current;

  //     const heading = headingRef.current;
  //     const stars = starsRef.current;

  //     if (!ellipse || !line || !wrapper) return;
  //     // if (!ellipsePath || !line || !wrapper) return;

  //     const tl = gsap.timeline();

  //     const ellipsePath = MorphSVGPlugin.convertToPath(ellipse);
  //     const linePath = MorphSVGPlugin.convertToPath(line);

  //     gsap.set(ellipsePath, { yPercent: 100 });
  //     gsap.set(heading, { opacity: 1 });
  //     tl.to(ellipsePath, {
  //       visibility: "visible",
  //       yPercent: 0,
  //       duration: 1,
  //       //   delay: 0.5,
  //       ease: "power2.inOut",
  //     });
  //     tl.to(ellipsePath, {
  //       scrollTrigger: {
  //         markers: true,
  //         start: "30% center",
  //         end: "30% 15%",
  //         scrub: 1,
  //         toggleActions: "play none play reset",
  //       },
  //       duration: 1.5,
  //       delay: 0.5,
  //       // @ts-ignore
  //       morphSVG: linePath,
  //       ease: "power2.inOut",
  //       onComplete: () => {
  //         gsap.set(line, { display: "inline" });
  //         // @ts-ignore
  //         ellipsePath.remove();
  //       },
  //     });
  //     // tl.to(
  //     //   ellipsePath,
  //     //   {
  //     //     scrollTrigger: {
  //     //       // markers: true,
  //     //       start: "30% 40%",
  //     //       end: "30% top",
  //     //       scrub: 1,
  //     //     },
  //     //     yPercent: 0,
  //     //     duration: 1,
  //     //     delay: 0.5,
  //     //     ease: "power2.inOut",
  //     //   },
  //     //   "<"
  //     // );
  //     tl.to(
  //       wrapper,
  //       {
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           // markers: true,
  //           start: '10% top',
  //           end: '90% top',
  //           scrub: 1,
  //         },
  //         yPercent: -110,
  //         duration: 1.5,
  //         ease: "power2.in",
  //       },
  //       "<"
  //     );
  //     tl.to(
  //       heading,
  //       {
  //         scrollTrigger: {
  //           trigger: heading,
  //           start: "top 20%",
  //           end: "bottom top",
  //           // markers: true,
  //           toggleActions: "play none play reset",
  //           scrub: 1,
  //         },
  //         opacity: 0,
  //         display:'none',
  //         duration: 1,
  //         y: "-100%",
  //       },
  //       "<"
  //     );

  //     // tl.set(heading, { display: "none" });
  //   },
  //   { scope: containerRef }
  // );

  useGSAP(() => {
    const stars = starsRef.current;
    const ellipse = ellipseRef.current;
    const line = lineRef.current;
    const heading = headingRef.current;
    const richTxt = richTxtRef.current;

    const loading = loadingRef.current;

    // @ts-ignore
    const ellipsePath = MorphSVGPlugin.convertToPath(ellipse);
    // @ts-ignore
    const linePath = MorphSVGPlugin.convertToPath(line);

    gsap.set(stars, { opacity: 1 });
    gsap.set(linePath, { display: "none" });
    gsap.set(linePath, { yPercent: 0 });
    // gsap.set(richTxt, { opacity: 0, yPercent: 100 });

    gsap.set(richTxt, { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(stars, {
      scrollTrigger: {
        trigger: stars,
        // markers: true,
        start: "center 35%",
        end: "90% 35%",
        scrub: 1,
        toggleActions: "play none restart reset",
      },
      opacity: 0,
      display: "none",
    });

    // tl.to(ellipsePath, {
    //   scrollTrigger: {
    //     trigger: ellipsePath,
    //     // markers: true,
    //     start: "top center",
    //     end: "top top",
    //     scrub: 1,
    //     toggleActions: "play reset play reset",
    //   },
    //   // duration: 1.5,
    //   // delay: 0.5,
    //   // @ts-ignore
    //   morphSVG: linePath,
    //   ease: "power2.inOut",
    //   // onComplete: () => {
    //   //   gsap.set(linePath, { display: "inline" });
    //   //   // @ts-ignore
    //   //   ellipsePath.remove();
    //   // },
    // });

    // tl.to(
    //   ellipsePath,
    //   {
    //     scrollTrigger: {
    //       trigger: ellipsePath,
    //       // markers: true,
    //       start: "top center",
    //       end: "top top",
    //       scrub: 1,
    //       toggleActions: "play reset play reset",
    //     },
    //     yPercent: -100,
    //     duration: 1,
    //   },
    //   "<"
    // );

    // tl.to(ellipsePathRef.current, {
    //   scrollTrigger: {
    //     trigger: ellipsePathRef.current,
    //     // markers: true,
    //     start: "top center",
    //     end: "top top",
    //     scrub: 1,
    //     toggleActions: "play reset play reset",
    //   },
    //   // duration: 1.5,
    //   // delay: 0.5,
    //   // @ts-ignore
    //   morphSVG: linePath,
    //   ease: "power2.inOut",
    //   // onComplete: () => {
    //   //   gsap.set(linePath, { display: "inline" });
    //   //   // @ts-ignore
    //   //   ellipsePath.remove();
    //   // },
    // });

    // tl.to(
    //   ellipsePathRef.current,
    //   {
    //     scrollTrigger: {
    //       trigger: ellipsePathRef.current,
    //       // markers: true,
    //       start: "top center",
    //       end: "top top",
    //       scrub: 1,
    //       toggleActions: "play reset play reset",
    //     },
    //     yPercent: -100,
    //     duration: 1,
    //   },
    //   "<"
    // );

    tl.to(
      ellipsePathRef.current,
      {
        scrollTrigger: {
          trigger: ellipsePathRef.current,
          // markers: true,
          start: "top center",
          end: "top top",
          scrub: 1,
          toggleActions: "play reset play reset",
        },
        scale: 3,
        transformOrigin: "center center",
        display: "none",
        // opacity: 0
      },
      "<"
    );

    tl.to(
      svgRef.current,
      {
        scrollTrigger: {
          trigger: svgRef.current,
          // markers: true,
          start: "top top",
          end: "center top",
          scrub: 1,
        },
        display: "none",
      },
      "<"
    );

    tl.to(
      heading,
      {
        scrollTrigger: {
          trigger: heading,
          // markers: true,
          scrub: 1,
          start: "top 20%",
          end: "top top",
        },
        opacity: 0,
        yPercent: -100,
        display: "none",
      },
      "<"
    );

    tl.to(
      testContainerRef.current,
      {
        scrollTrigger: {
          trigger: testContainerRef.current,
          // markers: true,
          start: "top top",
          end: "bottom 60%",
          scrub: 1,
        },
        display: "none",
        opacity: 0,
      },
      "<"
    );

    tl.to(
      loading,
      {
        scrollTrigger: {
          trigger: loading,
          // markers: true,
          start: "top top",
          end: "center center",
          scrub: 1,
        },
        display: "none",
      },
      "<"
    );

    // tl.to(
    //   richTxt,
    //   {
    //     scrollTrigger: {
    //       trigger: richTxt,
    //       // markers: true,

    //       start: "top bottom",
    //       end: "top 30%",
    //       scrub: 1,
    //       toggleActions: "play reset play reset",
    //     },
    //     opacity: 1,
    //     yPercent: 0,
    //   },
    //   "<"
    // );

    // tl.to(richTxt, {
    //   scrollTrigger: {
    //     trigger: richTxt,
    //     // markers: true,
    //     // start: "top 65%",
    //     // end: "top 25%",
    //     scrub: 1,
    //   },
    //   yPercent: 0,
    // }, "<");

    tl.to(richTxt, {
      scrollTrigger: {
        trigger: richTxt,
        // markers: true,
        start: 'top bottom',
        end: 'top 40%',
        scrub: 1,
      },
      opacity: 1,
    });
  });

  return (
    <div className="w-full h-[2500px]">
      <div ref={loadingRef} className="w-full h-[945px] fixed z-[5]">
        <div className="absolute inset-0 select-none shadow-mask z-[1000] bg-[#282828]"></div>
        <div
          ref={starsRef}
          className="overflow-hidden h-[845px] shadow-mask-stars relative z-[-1]"
        >
          <Starfield
            starCount={1200}
            starColor={[255, 255, 255]}
            speedFactor={0.2}
            backgroundColor="#282828"
            randomDriftFactor={0.5}
          />
        </div>
        <div
          ref={testContainerRef}
          className="h-[1145px] absolute top-0 bottom-0 left-0 right-0"
        >
          <div
            ref={containerRef}
            className="w-full overflow-hidden relative h-full"
          >
            <div ref={animationWrapperRef} className="h-full relative">
              <div
                ref={headingRef}
                className="text-center sticky top-[22%] font-semibold text-8xl tracking-[52px] z-[9999]"
              >
                <h1>SHOWCASE</h1>
              </div>
              <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // We add preserveAspectRatio to control how the large viewBox fits
                preserveAspectRatio="xMidYMid slice"
                style={{ position: "absolute", inset: "0" }}
                className="shadow-mask-ellipse"
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

                  <linearGradient
                    id="maskGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="black" stopOpacity="0" />
                    <stop offset="50%" stopColor="white" stopOpacity="1" />
                    <stop offset="50%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="black" stopOpacity="0" />
                  </linearGradient>

                  <mask
                    id="linearMask"
                    maskUnits="userSpaceOnUse"
                    maskContentUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="url(#maskGradient)"
                    />
                  </mask>
                </defs>
                <g
                  filter="url(#orangeShadow)"
                  mask=""
                  style={{ position: "sticky", top: 0 }}
                >
                  {/* <line
                    ref={lineRef}
                    x1="-110"
                    y1="10"
                    x2="100"
                    y2="10.1"
                    stroke="#fe9227"
                    strokeWidth={0.01}
                    style={{ display: "none" }}
                  /> */}
                  <path
                    ref={ellipsePathRef}
                    strokeWidth="0.01"
                    stroke="#fe9227b3"
                    fill="#282828"
                    d="M12 11 C0.95 11 -8 17.71 -8 26 -8 34.28 0.95 41 12 41 23.04 41 32 34.28 32 26 32 17.71 23.04 11 12 11 "
                    data-original="M32,26 C32,34.28427 23.04569,41 12,41 0.95431,41 -8,34.28427 -8,26 -8,17.71573 0.95431,11 12,11 23.04569,11 32,17.71573 32,26 z"
                    data-svg-origin="-8 11"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "0px 0px",
                    }}
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div ref={richTxtRef} className="absolute top-[100%]">
        <div className="">
          <Image src={logo} alt="xVS" className="mx-auto" />

          <p className="text-[20px]/[40px] font-light text-center w-[39%] mx-auto mt-[70px] text-[#F3EDDE]">
            With the inspiration of designing we started back in 2014 and
            bringing them to reality since then. From cosmetic startups to big
            automotive companies we had fun working at different scales and
            industries. We also picked a couple of awards along the way but
            customer satisfaction is what really mattered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollTriggerComponent;
