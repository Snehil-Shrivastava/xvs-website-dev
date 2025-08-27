"use client";

import Image from "next/image";
import Clients from "../components/Clients/Clients";
import ProcessCards from "../components/ProcessCards/ProcessCards";
import RichText from "../components/RichText/RichText";
import SectionHeadingText from "../components/SectionHeadingText/SectionHeadingText";
import styles from "./page.module.css";

import logo from "../../public/assests/vs-group.png";
import logo2 from "../../public/assests/Group_56.png";

import lambdaSVG from "../../public/assests/lambda-abt.svg";

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

gsap.registerPlugin(SplitText, ScrollTrigger, MorphSVGPlugin, ScrollSmoother);

const AboutPage = () => {
  // @ts-ignore
  const AboutMainText = useRef();

  const richTxtRef = useRef(null);

  const lambdaRef = useRef(null);
  const lambdaMirrorRef = useRef(null);

  const imgRef = useRef(null);

  const bigLambda1Ref = useRef(null);
  const bigLambda2Ref = useRef(null);
  const bigLambda3Ref = useRef(null);
  const bigLambda4Ref = useRef(null);
  const bigLambda5Ref = useRef(null);
  const bigLambda6Ref = useRef(null);
  const bigLambda7Ref = useRef(null);

  const smallLambdaRef = useRef(null);

  const morphTarget1Ref = useRef(null);
  const morphTarget2Ref = useRef(null);
  const morphTarget3Ref = useRef(null);
  const morphTarget4Ref = useRef(null);
  const morphTarget5Ref = useRef(null);
  const morphTarget6Ref = useRef(null);
  const morphTarget7Ref = useRef(null);

  useGSAP(() => {
    const richTxt = richTxtRef.current;

    gsap.set(richTxt, { opacity: 0, yPercent: 50 });

    gsap.set(lambdaRef, { visibility: "visible" });
    gsap.set(lambdaMirrorRef, { visibility: "hidden" });

    gsap.set(imgRef, { opacity: 0, yPercent: 100 });

    gsap.set(bigLambda1Ref, { scale: 1, x: 0, y: 0 });
    gsap.set(bigLambda2Ref, { scale: 1, x: 0, y: 0 });
    gsap.set(bigLambda3Ref, { scale: 1, x: 0, y: 0 });
    gsap.set(bigLambda4Ref, { scale: 1, x: 0, y: 0 });
    gsap.set(bigLambda5Ref, { scale: 1, x: 0, y: 0 });
    gsap.set(bigLambda6Ref, { scale: 1, x: 0, y: 0 });
    gsap.set(bigLambda7Ref, { scale: 1, x: 0, y: 0 });

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

    // gsap.to(richTxt, {
    //   ScrollTrigger: {
    //     trigger: richTxt,
    //     // markers: true,
    //     start: "center top",
    //     end: "bottom top",
    //     scrub: 1,
    //   },
    //   opacity: 1,
    // });

    // tl.to(lambdaRef.current, {
    //   scrollTrigger: {
    //     //@ts-ignore
    //     trigger: lambdaRef.current,
    //     // markers: true,
    //     start: "top 38%",
    //     end: "top 10%",
    //     scrub: 1,
    //     toggleActions: "play none none none",
    //   },
    //   duration: 1.5,
    //   delay: 0.5,
    //   // @ts-ignore
    //   morphSVG: lambdaMirrorRef.current,
    //   ease: "power2.inOut",
    //   // onComplete: () => {
    //   //   gsap.set(lambdaRef.current, { visibility: "hidden" });
    //   // },
    // });

    // tl.to(
    //   lambdaRef.current,
    //   {
    //     scrollTrigger: {
    //       //@ts-ignore
    //       trigger: lambdaRef.current,
    //       // markers: true,
    //       start: "top 38%",
    //       end: "top 10%",
    //       scrub: 1,
    //       toggleActions: "play none none none",
    //     },
    //     x: 50,
    //     y: 575,
    //     duration: 1.5,
    //     delay: 0.5,
    //     // @ts-ignore
    //   },
    //   "<"
    // );

    tl.to(smallLambdaRef.current, {
      scrollTrigger: {
        trigger: smallLambdaRef.current,
        // markers: true,
        start: "top 23%",
        end: "top top",
        scrub: 1,
      },
      scale: 0,
      duration: 1,
      transformOrigin: "center center",
    });

    tl.to(richTxt, {
      scrollTrigger: {
        trigger: richTxt,
        // markers: true,
        start: "top bottom",
        end: "top 80%",
        scrub: 1,
        toggleActions: "play none play reset",
      },
      opacity: 1,
      yPercent: 0,
    });

    mm.add("(min-width: 426px)", () => {
      tl.to(
        bigLambda1Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda2Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda3Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda4Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda5Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda6Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda7Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          x: -50,
          y: 530,
          scale: 0.5,
          transformOrigin: "center center",
        },
        "<"
      );
    });

    mm.add("(max-width: 426px)", () => {
      tl.to(
        bigLambda1Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda2Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda3Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda4Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda5Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda6Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );

      tl.to(
        bigLambda7Ref.current,
        {
          scrollTrigger: {
            // @ts-ignore
            trigger: bigLambda1Ref.current,
            // markers: true,
            start: "top 25%",
            end: "top 10%",
            scrub: 1,
            toggleActions: "play none none play",
          },
          x: -20,
          y: 620,
          scale: 0.2,
          transformOrigin: "center center",
        },
        "<"
      );
    });
  }, {});

  return (
    <>
      <div className="relative">
        <div
          className={`min-[2200px]:h-[100vh] h-[400px] w-full pointer-events-none`}
        >
          <GridSVG />
        </div>
        <h1
          // @ts-ignore
          ref={AboutMainText}
          className="absolute text-center top-17.5 left-1/2 -translate-x-1/2 mx-auto text-[#F3EDDE] font-semibold aboutText pointer-events-none text-[1.8rem]/[2rem] w-4/5"
        >
          Inspiration to interpreting reality
        </h1>
        <div
          // id="smooth-wrapper"
          className={`absolute left-1/2 -translate-x-1/2 top-40 pointer-events-none h-24 w-21 ${styles.circleGlow}`}
        >        
          <div className="relative h-full">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <SmallLambda />
            </div>
            <div className="absolute">
              <BIgLambda />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={richTxtRef}
        className="relative pt-[72px] max-[426px]:pt-0"
        style={{ opacity: 0 }}
      >

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
          With the inspiration of designing we started back in 2014 and bringing
          them to reality since then. From cosmetic startups to big automotive
          companies we had fun working at different scales and industries. We
          also picked a couple of awards along the way but customer satisfaction
          is what really mattered.
        </p>
      </div>
      <div className="text-center my-[200px] w-[80%] mx-auto max-[1025px]:w-[85%] max-[769px]:w-[90%] max-[426px]:my-[112px]">
        <SectionHeadingText
          SectionTitle="PROCESS"
          buttonTitle="PROCESS"
          size="8rem"
          tracking="52px"
        />
        <p className="text-[#F3EDDE] font-light tracking-wider max-[426px]:text-[0.5rem] max-[769px]:text-[0.75rem]">
          We keep it simple and listen...
        </p>
        <ProcessCards />
        {/* @ts-ignore */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-[20px] font-light mt-[66px] xl:w-[67%] lg:w-[80%] mx-auto max-[1025px]:text-[1rem] max-[769px]:w-[90%] max-[769px]:text-[0.75rem] max-[426px]:text-[0.5rem] max-[426px]:mt-[40px]"
        >
          At xVS we design using tools but it's more than that, it's the
          aspiration of all who come together to make inspiration a reality.
        </motion.p>
      </div>
      <div className="w-[80%] mx-auto text-center max-[769px]:w-[90%]">
        <SectionHeadingText
          SectionTitle="CLIENTS"
          buttonTitle="REVIEWS"
          size="8rem"
          tracking="52px"
        />
        <p className="text-[#F3EDDE] font-light tracking-wider max-[769px]:text-[0.75rem] max-[426px]:text-[0.5rem]">
          Hear from visionaries and experts
        </p>
        <Clients />
      </div>
    </>
  );
};

export default AboutPage;
