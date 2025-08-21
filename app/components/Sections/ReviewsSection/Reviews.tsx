"use client";

import React, { useRef } from "react";
import SectionHeadingText from "../../SectionHeadingText/SectionHeadingText";

import "./Reviews.css";

import ReviewsThumbSlider from "../../ReviewsThumbSlider/ReviewsThumbSlider";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const cardLayerRef = useRef(null);

  useGSAP(() => {
    const cardLayer = cardLayerRef.current;

    gsap.set(cardLayer, {width: '100%'})

    const tl = gsap.timeline();

    tl.to(cardLayer, {
      scrollTrigger: {
        trigger: cardLayer,
        // markers: true,
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
        once: true,
      },
      width: 0,
      duration: 0.8,
    });
  });
  return (
    <div className="mt-[180px] max-[1024px]:mt-[140px]">
      <SectionHeadingText SectionTitle="WORDS" buttonTitle="REVIEWS" tracking="2.8vw" size="8vw" />
      <div className="mt-[28px]">
        <h3 className="font-light tracking-wide text-[#F3EDDE] my-[32px]">
          Hear from visionaries and experts
        </h3>
        <div className="relative p-[2px] flex">
          <div
            ref={cardLayerRef}
            className="absolute inset-0 bg-[#282828] z-[5]"
          ></div>
          <div className="bg-[#F3EDDE] max-w-[1280px] 2xl:w-full xl:w-full lg:w-full max-[769px]:w-full mx-auto reviews-box relative">
            <ReviewsThumbSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
