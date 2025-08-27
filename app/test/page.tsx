"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SmallLambda from "../components/SVGs/SmallLambda";
import BIgLambda from "../components/SVGs/BIgLambda";
gsap.registerPlugin(ScrollTrigger);

export default function SvgScrollTransition() {
  const container = useRef(null);
  const svgRef = useRef(null);
  const targetRef = useRef(null); // The destination in bottom section

  useGSAP(
    () => {
      // Measure the final target's position and scale

      //@ts-ignore
      const targetRect = targetRef.current.getBoundingClientRect();
      //@ts-ignore
      const svgRect = svgRef.current.getBoundingClientRect();

      console.log('targetRect', targetRect, 'svgRect', svgRect)

      // Calculate deltas for position/scale
      const yDelta = targetRect.top - svgRect.top;
      const xDelta = targetRect.left - svgRect.left;
      const scale = targetRect.width / svgRect.width;

      console.log('yDelta', yDelta, 'xDelta', xDelta, 'scale', scale)

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: svgRef.current, // Pin the SVG while animating
            anticipatePin: 1,
          },
        })
        .to(svgRef.current, {
          // x: xDelta,
          // y: yDelta,
          scale: scale,
          ease: "power1.inOut",
        });
    },
    { dependencies: [] }
  );

  return (
    <div
      ref={container}
      style={{
        minHeight: "200vh",
        position: "relative",
        border: "1px solid white",
        padding: "8px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "1px solid green",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="139"
          height="162"
          viewBox="0 0 139 162"
          fill="none"
          className="h-15.5 w-13 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="287"
          viewBox="-38 0 268 287"
          fill="none"
          className="w-21 h-24"
        >
          <foreignObject x="-29.3574" y="-9.99979" width="296.6" height="297">
            <div
              style={{
                backdropFilter: "blur(15px)",
                clipPath: "url(#bgblur_0_3703_1661_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g filter="url(#filter0_d_3703_1661)" data-figma-bg-blur-radius="30">
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
          <foreignObject x="-29.3574" y="-9.99979" width="296.6" height="297">
            <div
              style={{
                backdropFilter: "blur(15px)",
                clipPath: "url(#bgblur_1_3703_1661_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g filter="url(#filter1_d_3703_1661)" data-figma-bg-blur-radius="30">
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
              <stop offset="0.447036" stopColor="#F79839" stopOpacity="0.96" />
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
      {/* Bottom Section */}
      <div
        style={{
          height: "30vh",
          position: "relative",
          border: "1px solid blue",
        }}
      >
        <div
          ref={targetRef}
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: "50%",
            top: "40px",
            //   transform: "translateX(-50%)",
            pointerEvents: "none",
            border: '1px solid red'
          }}
        />
        <div className="relative pt-[72px] max-[426px]:pt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="217"
            height="172"
            viewBox="0 0 217 172"
            fill="none"
            className="w-auto h-20 mx-auto scale-[1] translate-x-[5px]"
          >
            <path
              d="M207.327 93.0358C204.169 89.0617 200.288 85.6712 195.779 82.6053C193.841 81.2861 191.782 80.0244 189.625 78.7997C186.107 76.8065 182.309 74.916 178.263 73.0297C162.077 65.5829 154.827 62.217 148.785 55.7319C146.102 52.6208 144.664 49.0947 144.461 45.1617C144.445 44.8452 144.432 44.5247 144.432 44.2C144.432 35.5532 152.166 28.8256 161.585 28.8256C162.933 28.8256 164.23 28.9201 165.474 29.1009C170.108 29.7872 174.018 31.7517 177.209 34.9655L183.115 24.6131L192.353 8.42081C185.078 3.41928 176.155 0.653445 165.59 0.106853C164.28 0.0369874 162.949 0 161.589 0C141.899 0 126.457 9.77291 119.129 24.6172C116.116 30.7201 114.475 37.6779 114.475 45.1658C114.475 56.8374 117.769 66.1212 123.564 73.6913C123.944 74.1886 124.337 74.6777 124.738 75.1626C125.544 76.1284 126.391 77.0654 127.28 77.9778C128.135 78.8531 129.028 79.6997 129.954 80.5258C130.57 81.0724 131.202 81.6066 131.847 82.1368C132.76 82.8807 133.703 83.6122 134.678 84.3191C135.12 84.6396 135.567 84.9561 136.017 85.2684C137.828 86.5178 139.733 87.7055 141.729 88.8356C142.229 89.1192 142.734 89.3987 143.242 89.674C144.259 90.2288 145.3 90.7672 146.363 91.2932L150.545 93.3029L153.368 94.6591C154.617 95.2715 155.815 95.855 156.956 96.4181C157.336 96.6071 157.712 96.7921 158.08 96.9729C159.188 97.5236 160.246 98.0496 161.259 98.5592C162.156 99.0113 163.011 99.451 163.838 99.8784C164.106 100.018 164.375 100.158 164.635 100.294C165.218 100.598 165.784 100.902 166.334 101.198C166.644 101.366 166.954 101.531 167.252 101.699C168.041 102.131 168.793 102.558 169.513 102.977C169.81 103.15 170.104 103.322 170.393 103.495C170.583 103.61 170.773 103.721 170.959 103.836C171.199 103.98 171.43 104.124 171.662 104.272C172.261 104.65 172.844 105.024 173.402 105.398C173.675 105.583 173.943 105.768 174.208 105.953C174.505 106.162 174.799 106.372 175.084 106.586C175.444 106.849 175.791 107.116 176.13 107.387C177.151 108.192 178.101 109.023 178.998 109.902C179.25 110.149 179.498 110.399 179.746 110.654C179.986 110.901 180.222 111.156 180.453 111.41C180.685 111.665 180.916 111.928 181.143 112.191C183.801 115.315 185.252 119.157 185.252 123.242C185.252 130.845 182.462 136.475 177.647 139.792C173.939 142.344 169.033 143.524 163.267 143.178C158.155 142.87 153.699 142.151 149.768 140.856L135.604 165.757C143.569 169.735 152.674 172.004 162.54 172.004C194.192 172.004 216.66 152.306 216.66 121.796C216.329 109.253 212.998 100.191 207.311 93.0317L207.327 93.0358Z"
              fill="#F3EDDE"
            />
            <path
              d="M41.4123 55.7319L53.5102 34.723C42.4167 15.095 33.8941 0 33.8941 0H0.758301C12.8685 21.202 24.9292 42.3136 36.9857 63.417L41.4123 55.7319Z"
              fill="#F3EDDE"
            />
            <path
              d="M122.51 100.918C118.691 98.1518 115.227 95.1558 112.148 91.9667C107.325 100.424 102.758 108.43 99.0004 115.006C92.7304 104.029 81.2691 83.8048 69.692 63.3384L53.2998 91.9749C68.4851 118.557 83.6952 145.179 99.0211 172.007C111.135 150.797 123.171 129.723 135.186 108.681C130.566 106.277 126.313 103.671 122.51 100.918Z"
              fill="#F3EDDE"
            />
          </svg>
          <p
            // @ts-ignore
            className="font-light text-center w-4/5 mx-auto text-[#F3EDDE] text-[0.5rem]/[1rem] mt-[22px]"
          >
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
}
