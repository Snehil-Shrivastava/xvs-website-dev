"use client";

import Clients from "../components/Clients/Clients";
import ProcessCards from "../components/ProcessCards/ProcessCards";
import RichText from "../components/RichText/RichText";
import SectionHeadingText from "../components/SectionHeadingText/SectionHeadingText";
import styles from "./page.module.css";


import * as motion from "motion/react-client";

import GridSVG from "../components/GridSVG/GridSVG";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import BIgLambda from "../components/SVGs/BIgLambda";
import SmallLambda from "../components/SVGs/SmallLambda";
import GridSVGBg from "../components/SVGs/GridSVGBg";
import { useModal } from "../context/ModalContext";
import Gears from "../components/SVGs/Gears";
import ReviewsBtnSVG from "../components/SVGs/ReviewsBtnSVG";
import RichTxtSVG from "../components/SVGs/RichTxtSVG";

gsap.registerPlugin(SplitText, ScrollTrigger, MorphSVGPlugin, ScrollSmoother);

const AboutPage = () => {
  // @ts-ignore
  const AboutMainText = useRef();

  const richTxtRef = useRef(null);

  const lambdaRef = useRef(null);
  const lambdaMirrorRef = useRef(null);

  const imgRef = useRef(null);

  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const smallSvgRef = useRef(null);

  const topSectionRef = useRef(null);

  useGSAP(
    () => {
      const richTxt = richTxtRef.current;

      gsap.set(richTxt, { opacity: 0, yPercent: 50 });

      gsap.set(lambdaRef, { visibility: "visible" });
      gsap.set(lambdaMirrorRef, { visibility: "hidden" });

      gsap.set(imgRef, { opacity: 0, yPercent: 100 });

      const tl = gsap.timeline();
      const mm = gsap.matchMedia();

      // @ts-ignore
      const split = SplitText.create(AboutMainText.current, {
        type: "words",
      });

      gsap.from(split.words, {
        duration: 0.7,
        y: -100,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          // @ts-ignore
          trigger: AboutMainText.current,
          start: "top bottom",
          end: "top top",
        },
      });

      tl.to(richTxt, {
        scrollTrigger: {
          trigger: richTxt,
          start: "top bottom",
          end: "top 80%",
          scrub: 1,
          toggleActions: "play none play reset",
        },
        opacity: 1,
        yPercent: 0,
      });

      tl.to(smallSvgRef.current, {
        scrollTrigger: {
          trigger: smallSvgRef.current,
          start: "top 20%",
          end: "bottom 20%",
          scrub: 1,
        },
        scale: 0,
      });

      mm.add(
        {
          isMobile: "(max-width: 426px)",
          isTablet: "(min-width: 426px) and (max-width: 769px)",
          isDesktopsm: "(min-width: 769px) and (max-width: 1025px)",
          isDesktopmd: "(min-width: 1025px) and (max-width: 1441px)",
          isDesktoplg: "(min-width: 1441px) and (max-width: 2561px)",
        },
        (context) => {
          // @ts-ignore
          const { isMobile, isTablet, isMobilesm } = context.conditions;

          gsap.to(svgRef.current, {
            scrollTrigger: {
              trigger: svgRef.current,
              markers: true,
              // @ts-ignore
              start: () => {
                const triggerElement = containerRef.current;
                // @ts-ignore
                return "top top+=" + (triggerElement.offsetHeight + 50);
              },
              end: () => {
                const triggerElement = containerRef.current;
                // @ts-ignore
                return "bottom top+=" + (triggerElement.offsetHeight + 50);
              },
              scrub: 1,
            },
            scale: isTablet ? 0.9 : 0.6,
            x: isMobile ? -30 : isTablet ? -60 : -70,
            // y: isMobilesm ? 250 : isMobile ? 378 : 555,
            y: () => {
              // @ts-ignore
              const topSection = topSectionRef.current.offsetHeight;
              // @ts-ignore
              const container = containerRef.current.offsetTop;
              // @ts-ignore
              const richTxt = richTxtRef.current.offsetHeight;
              // @ts-ignore
              const richTxtSVG = richTxtRef.current.firstChild.clientHeight;
              // @ts-ignore
              const richTxtPara = richTxtRef.current.lastChild.offsetHeight;

              console.log(richTxtSVG);

              const translate = topSection - container;

              console.log("translate", translate + richTxtSVG / 5);

              return isMobile
                ? translate + richTxtSVG / 5
                : translate + richTxtSVG / 5 + 72;
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  // @ts-ignore
  const { isModalOpen } = useModal();

  return (
    <section className={`${isModalOpen ? "invisible" : ""}`}>
      <div className="relative">
        <div
          ref={topSectionRef}
          className={`min-[2200px]:h-[100vh] max-sm:h-100 sm:max-lg:h-125 lg:max-xl:h-162.5 xl:max-2xl:h-215  min-[1536px]:max-[1906px]:h-280 w-full pointer-events-none`}
        >
          {/* <GridSVG /> */}
          <GridSVGBg />
        </div>
        <h1
          // @ts-ignore
          ref={AboutMainText}
          className="absolute text-center max-sm:top-17.5 sm:max-lg:top-25 lg:max-xl:top-35 xl:max-2xl:top-40  min-[1536px]:max-[1906px]:top-48 min-[1906px]:top-60 left-1/2 -translate-x-1/2 mx-auto text-[#F3EDDE] font-semibold aboutText pointer-events-none max-sm:text-[1.8rem]/[2rem] max-sm:w-4/5 sm:max-lg:w-3/5 sm:max-lg:text-[2.5rem]/[3rem] lg:max-xl:w-3/5 lg:max-xl:text-[3.5rem]/[4rem] xl:max-2xl:text-[4rem]/[5rem] min-[1536px]:max-[1906px]:text-[4.2rem]/[5rem] min-[1536px]:max-[1906px]:w-2/5 min-[1906px]:text-[5.2rem]/[5.5rem] min-[1906px]:w-2/5"
        >
          Inspiration to interpreting reality
        </h1>
        <div
          ref={containerRef}
          className={`absolute left-1/2 -translate-x-1/2 max-sm:top-40 pointer-events-none max-sm:h-24 max-sm:w-21 sm:max-lg:top-56.5 sm:max-lg:w-29 sm:max-lg:h-33.75 lg:max-xl:top-80 lg:max-2xl:w-51 lg:max-2xl:h-59.25 xl:max-2xl:top-95 min-[1536px]:max-[1906px]:w-80 min-[1536px]:max-[1906px]:h-100 min-[1536px]:max-[1906px]:top-100 min-[1906px]:w-110 min-[1906px]:h-130 min-[1906px]:top-120`}
        >
          <div className="relative h-full">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <svg
                ref={smallSvgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="139"
                height="162"
                viewBox="0 0 139 162"
                fill="none"
                className="max-sm:h-15.5 max-sm:w-13 sm:max-lg:w-18.5 sm:max-lg:h-22 lg:max-2xl:w-32.5 lg:max-2xl:h-38.5 min-[1536px]:max-[1906px]:w-50 min-[1536px]:max-[1906px]:h-70 min-[1906px]:w-60 min-[1906px]:h-80"
              >
                <g filter="url(#filter0_d_3595_2121)">
                  <path
                    d="M131.646 0.000213623L89.9105 76.6471L134.643 151.435L91.5217 152.29L68.8932 114.785L47.7262 153.145L4.64258 154L88.5244 0.855134L131.646 0.000213623Z"
                    fill="#F79839"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3595_2121"
                    x="0.642578"
                    y="0.000213623"
                    width="138"
                    height="162"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3595_2121"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3595_2121"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="268"
                height="287"
                viewBox="-38 0 268 287"
                fill="none"
                className="max-sm:w-21 max-sm:h-24 sm:max-lg:w-29 sm:max-lg:h-33.75 lg:max-2xl:w-51 lg:max-2xl:h-59.25 min-[1536px]:max-[1906px]:w-80 min-[1536px]:max-[1906px]:h-100 min-[1906px]:w-110 min-[1906px]:h-130"
              >
                <foreignObject
                  x="-29.3574"
                  y="-9.99979"
                  width="296.6"
                  height="297"
                >
                  <div
                    style={{
                      backdropFilter: "blur(15px)",
                      clipPath: "url(#bgblur_0_3703_1661_clip_path)",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                </foreignObject>
                <g
                  filter="url(#filter0_d_3703_1661)"
                  data-figma-bg-blur-radius="30"
                >
                  <path
                    d="M0.642578 20.0002L68.4793 138.598L0.642578 257H68.2817L102.647 197.625L137.012 257H204.643L68.2817 20.0002H0.642578Z"
                    fill="#F79839"
                    fillOpacity="0.3"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M68.1377 20.2502L204.21 256.75H137.156L102.863 197.499L102.646 197.126L102.431 197.499L68.1377 256.75H1.07324L68.6963 138.722L68.7676 138.598L68.6963 138.474L1.07324 20.2502H68.1377Z"
                    stroke="url(#paint0_linear_3703_1661)"
                    strokeWidth="0.5"
                    shapeRendering="crispEdges"
                  />
                </g>
                <foreignObject
                  x="-29.3574"
                  y="-9.99979"
                  width="296.6"
                  height="297"
                >
                  <div
                    style={{
                      backdropFilter: "blur(15px)",
                      clipPath: "url(#bgblur_1_3703_1661_clip_path)",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                </foreignObject>
                <g
                  filter="url(#filter1_d_3703_1661)"
                  data-figma-bg-blur-radius="30"
                >
                  <path
                    d="M0.642578 20.0002L68.4793 138.598L0.642578 257H68.2817L102.647 197.625L137.012 257H204.643L68.2817 20.0002H0.642578Z"
                    fill="url(#paint1_linear_3703_1661)"
                    fillOpacity="0.4"
                    style={{ mixBlendMode: "color-dodge" }}
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M0.642578 20.0002L68.4793 138.598L0.642578 257H68.2817L102.647 197.625L137.012 257H204.643L68.2817 20.0002H0.642578Z"
                    fill="white"
                    fillOpacity="0.1"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M68.1377 20.2502L204.21 256.75H137.156L102.863 197.499L102.646 197.126L102.431 197.499L68.1377 256.75H1.07324L68.6963 138.722L68.7676 138.598L68.6963 138.474L1.07324 20.2502H68.1377Z"
                    stroke="url(#paint2_linear_3703_1661)"
                    strokeWidth="0.5"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3703_1661"
                    x="-29.3574"
                    y="-9.99979"
                    width="296.6"
                    height="297"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="38" dy="5" />
                    <feGaussianBlur stdDeviation="12.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3703_1661"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3703_1661"
                      result="shape"
                    />
                  </filter>
                  <clipPath
                    id="bgblur_0_3703_1661_clip_path"
                    transform="translate(29.3574 9.99979)"
                  >
                    <path d="M0.642578 20.0002L68.4793 138.598L0.642578 257H68.2817L102.647 197.625L137.012 257H204.643L68.2817 20.0002H0.642578Z" />
                  </clipPath>
                  <filter
                    id="filter1_d_3703_1661"
                    x="-29.3574"
                    y="-9.99979"
                    width="296.6"
                    height="297"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="38" dy="5" />
                    <feGaussianBlur stdDeviation="12.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3703_1661"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3703_1661"
                      result="shape"
                    />
                  </filter>
                  <clipPath
                    id="bgblur_1_3703_1661_clip_path"
                    transform="translate(29.3574 9.99979)"
                  >
                    <path d="M0.642578 20.0002L68.4793 138.598L0.642578 257H68.2817L102.647 197.625L137.012 257H204.643L68.2817 20.0002H0.642578Z" />
                  </clipPath>
                  <linearGradient
                    id="paint0_linear_3703_1661"
                    x1="221.435"
                    y1="138.5"
                    x2="-16.1501"
                    y2="138.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3703_1661"
                    x1="22.4728"
                    y1="41.8663"
                    x2="255.424"
                    y2="145.691"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F79839" stopOpacity="0.9" />
                    <stop
                      offset="0.447036"
                      stopColor="#F79839"
                      stopOpacity="0.96"
                    />
                    <stop offset="1" stopColor="#F79839" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_3703_1661"
                    x1="221.435"
                    y1="138.5"
                    x2="-16.1501"
                    y2="138.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={richTxtRef}
        className="relative pt-[72px] max-[768px]:pt-0"
        style={{ opacity: 0 }}
      >
        <RichText />
      </div>
      <div className="text-center my-[200px] w-[80%] mx-auto max-[1025px]:w-[85%] max-[769px]:w-[90%] max-[426px]:my-[112px]">
        <SectionHeadingText
          SectionTitle="PROCESS"
          buttonTitle="PROCESS"
          size="8rem"
          tracking="52px"
          svg={<Gears />}
        />
        <p className="text-[#F3EDDE] font-light tracking-wider max-[426px]:text-[0.5rem] max-[769px]:text-[0.75rem] min-[1906px]:text-[22px]">
          We keep it simple and listen...
        </p>
        <ProcessCards />
        {/* @ts-ignore */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-[20px] font-light mt-[66px] max-2xl:w-9/10 max-xl:w-[90%] max-lg:w-[80%] mx-auto max-[1025px]:text-[1rem] max-[769px]:w-[90%] max-[769px]:text-[0.75rem] max-[426px]:text-[0.5rem] max-[426px]:mt-[40px] max-[1906px]:w-7/10 min-[1906px]:text-[1.5rem] min-[1906px]:w-1/2 text-[#F3EDDE]"
        >
          At xVS we design using tools but it's more than that, it's the
          aspiration of all who come together to make inspiration a reality.
        </motion.p>
      </div>
      <div className="w-[80%] mx-auto text-center max-[769px]:w-[95%]">
        <SectionHeadingText
          SectionTitle="CLIENTS"
          buttonTitle="REVIEWS"
          size="8rem"
          tracking="52px"
          svg={<ReviewsBtnSVG />}
        />
        <p className="text-[#F3EDDE] font-light tracking-wider max-[769px]:text-[0.75rem] max-[426px]:text-[0.5rem] min-[1906px]:text-[22px]">
          Hear from visionaries and experts
        </p>
        <Clients />
      </div>
    </section>
  );
};

export default AboutPage;
