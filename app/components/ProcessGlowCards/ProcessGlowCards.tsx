"use client";

import React, { useRef, useEffect } from "react";
import styles from "./ProcessGlowCards.module.css";
import Image from "next/image";

import ProjectsImg from "../../../public/assests/layer.png";
import TimeImg from "../../../public/assests/time.png";
import HexaImg from "../../../public/assests/hexa.png";
import StarImg from "../../../public/assests/star.png";

import * as motion from "motion/react-client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Heart from "../SVGs/Heart";
import Branding from "../SVGs/Branding";

// const cardData = [
//   {
//     title: "Projects",
//     subtitle: "500+",
//     text1: "meaningful impact on businesses",
//     text2: "with our design projects",
//     img: ProjectsImg,
//   },
// ];

gsap.registerPlugin(ScrollTrigger);

const ProcessGlowCards = ({
  heading,
  description,
  order,
}: {
  heading: string;
  description: string;
  order: number;
}) => {
  const bodyContainerRef = useRef(null);
  const cardLayerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    if (!cardsContainer) return;

    // @ts-ignore
    const handleMouseMove = (e) => {
      // @ts-ignore
      const cards = cardsContainer.getElementsByClassName(styles.card);

      for (const card of cards) {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    // @ts-ignore
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      // @ts-ignore
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const bodyContainer = bodyContainerRef.current;
    const cardLayer = cardLayerRef.current;

    gsap.set(cardLayer, {width: '100%'})

    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add('(min-width: 426px)', () => {
    tl.to(cardLayer, {
      scrollTrigger: {
        trigger: cardLayer,
        // markers: true,
        start: "top 75%",
        end: "top 40%",
        scrub: 1,
        once: true,
      },
      width: 0,
    });
        })

    mm.add("(max-width: 426px)", () => {
      tl.to(cardLayer, {
        scrollTrigger: {
          trigger: cardLayer,
          // markers: true,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
          once: true,
        },
        width: 0,
      });
    });
  });

  return (
    <div
      ref={bodyContainerRef}
      className={`${styles.bodyContainer} ${
        order === 1 ? styles.bodyContainerFirst : styles.bodyContainerLast
      } max-[1441px]:flex-1 max-[1441px]:w-auto max-[1025px]:flex-1 max-[1025px]:w-auto max-[769px]:flex-1 w-[580px] max-[426px]:w-full`}
    >
      <div
        ref={cardLayerRef}
        className="absolute inset-0 bg-[#282828] z-[1]"
      ></div>
      <div
        id="cards"
        className={`${styles.cards} h-full`}
        ref={cardsContainerRef}
      >
        {/* {cardData.map((card, index) => ( */}
        <div className={`${styles.cardShadowContainer} h-full`}>
          <div
            className={`${styles.card} ${
              order === 1 ? styles.clipCardFirst : styles.clipCardLast
            }`}
          >
            <div className={styles["card-content"]}>
              <div className="text-left py-[48px] mt-auto flex flex-col gap-[48px] max-[1441px]:mt-[0] max-[1025px]:mt-[0] max-[769px]:mt-[0] max-[1025px]:gap-[24px] max-[769px]:gap-[24px] max-[769px]:py-[38px] max-[426px]:py-[12px] max-[426px]:gap-[8px]">
                <div className="flex items-center w-[80%] mx-auto gap-[32px] justify-center max-[426px]:gap-0 max-[769px]:gap-[8px] max-[1025px]:gap-[22px]">
                  {order === 1 ? (
                    // <div className="flex items-center relative bg-glow">
                    //   <span
                    //     className="w-[78px] h-[48px] block rounded-l-[28px] rounded-br-[22px] z-[5] max-[769px]:w-[68px] max-[769px]:h-[38px]"
                    //     style={{
                    //       backdropFilter: "blur(2px)",
                    //       background: "rgba(221, 221, 221, 0.8)",
                    //       boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    //       border: "1px solid rgba(138, 138, 138, 0.23)",
                    //       transform: "rotate(45deg)",
                    //     }}
                    //   ></span>
                    //   <span
                    //     className="w-[35px] h-[29px] block absolute left-[67%] top-[12px] z-[3] max-[769px]:w-[29px] max-[769px]:h-[22px] max-[769px]:top-[13px]"
                    //     style={{
                    //       background: "#F79839",
                    //       boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    //       border: "1px solid rgba(138, 138, 138, 0.23)",
                    //       transform: "rotate(-45deg) skew(-40deg)",
                    //     }}
                    //   ></span>
                    // </div>
                    <Heart />
                  ) : (
                    // <div className="flex items-center relative bg-glow">
                    //   <span className="w-[45px] h-[50px] bg-[#5F5F5C] block rounded-[5px] max-[769px]:h-[45px] max-[769px]:w-[30px]"></span>
                    //   <span
                    //     className="w-[50px] h-[70px] block rounded-[5px] absolute left-1/2 -translate-x-1/2 max-[769px]:h-[60px] max-[769px]:w-[40px]"
                    //     style={{
                    //       backdropFilter: "blur(2px)",
                    //       background: "rgba(221, 221, 221, 0.8)",
                    //       borderRadius: "5px",
                    //       boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    //       border: "1px solid rgba(138, 138, 138, 0.23)",
                    //     }}
                    //   ></span>
                    //   <span className="w-[45px] h-[50px] bg-[#F79839] block rounded-[5px] max-[769px]:h-[45px] max-[769px]:w-[30px]"></span>
                    // </div>
                    <Branding />
                  )}
                  <h1 className="text-[64px] font-semibold tracking-wide text-[#F3EDDE] max-[1441px]:text-[4rem] max-[1025px]:text-[2rem] max-[769px]:text-[2.3rem] max-[426px]:text-[1rem]/[2rem]">
                    {heading}
                  </h1>
                </div>
                <p className="max-[1441px]:text-[18px]/[35px] tracking-wider w-[72%] mx-auto font-light text-left max-[1025px]:text-[1rem]/[2rem] max-[426px]:text-[0.5rem]/[1rem] max-[426px]:w-[85%] max-[769px]:text-[0.625rem]/[1.2rem]">
                  {description}
                </p>
              </div>
              {/* <div>
                  {index === 2 ? (
                    <Image
                      src={card.img}
                      alt="image"
                      width={180}
                      height={103}
                      className="absolute top-[15%] right-[10%]"
                    />
                  ) : (
                    <Image
                      src={card.img}
                      alt="image"
                      width={114}
                      height={103}
                      className="absolute top-[15%] right-[10%]"
                    />
                  )}
                </div> */}
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ProcessGlowCards;
