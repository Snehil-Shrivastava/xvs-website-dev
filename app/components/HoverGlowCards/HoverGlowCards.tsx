"use client";

import React, { useRef, useEffect } from "react";
import styles from "./HoverGlowCard.module.css";
import Image from "next/image";

import ProjectsImg from "../../../public/assests/layer.png";
import TimeImg from "../../../public/assests/time.png";
import HexaImg from "../../../public/assests/hexa.png";
import StarImg from "../../../public/assests/star.png";

import {gsap} from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const cardData = [
  {
    title: "Projects",
    subtitle: "500+",
    text1: "meaningful impact on businesses",
    text2: "with our design projects",
    img: ProjectsImg,
  },
  {
    title: "Years",
    subtitle: "10",
    text1: "years of working with our customers",
    text2: "to improve their design footprint",
    img: TimeImg,
  },
  {
    title: "People",
    subtitle: "12",
    text1: "talented professionals using their",
    text2: "skills to bring designs to life",
    img: HexaImg,
  },
  {
    title: "Rating",
    subtitle: "4.9",
    text1: "average ORR* awarded by our customers",
    text2: "ORR = Overall Review Rating",
    img: StarImg,
  },
];

const HoverGlowCards = () => {
  const cardsContainerRef = useRef(null);

  // const cardLayerRef = useRef(null)
  const cardLayerRef0 = useRef(null)
  const cardLayerRef1 = useRef(null)
  const cardLayerRef2 = useRef(null)
  const cardLayerRef3 = useRef(null)

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
    // const cardLayer = cardLayerRef.current;
    const cardLayer0 = cardLayerRef0.current;
    const cardLayer1 = cardLayerRef1.current;
    const cardLayer2 = cardLayerRef2.current;
    const cardLayer3 = cardLayerRef3.current;

    const tl = gsap.timeline()

    tl.to(cardLayer0, {
      scrollTrigger: {
        trigger: cardLayer0,
        // markers: true,
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
              once: true,
      },
      width: 0,
      duration: 0.5,
    })

    tl.to(cardLayer1, {
      scrollTrigger: {
        trigger: cardLayer1,
        // markers: true,
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
              once: true,
      },
      width: 0,
      duration: 0.5,
      delay: 0.2
    })

        tl.to(cardLayer2, {
      scrollTrigger: {
        trigger: cardLayer2,
        // markers: true,
        start: 'top 70%',
        end: 'top center',
        scrub: 1,
              once: true,
      },
      width: 0,
      duration: 0.5,
    })

      tl.to(cardLayer3, {
      scrollTrigger: {
        trigger: cardLayer3,
        // markers: true,
        start: 'top 70%',
        end: 'top center',
        scrub: 1,
              once: true,
      },
      width: 0,
      duration: 0.5,
    })

  })

  return (
    <div className={`${styles.bodyContainer} lg:mb-[220px] max-[1024px]:mb-[143px]`}>
      <div id="cards" className={styles.cards} ref={cardsContainerRef}>
        {cardData.map((card, index) => (
          <div key={index} className={`${styles.cardShadowContainer} relative lg:h-[360px] max-[1024px]:h-[280px]`}>
            <div ref={index===0? cardLayerRef0 : index === 1? cardLayerRef1 : index=== 2? cardLayerRef2 : cardLayerRef3} className="absolute inset-0 bg-[#282828] z-[5]"></div>
            <div
              className={`${styles.card} ${
                index === 0
                  ? styles.clipCardFirst
                  : index === 3
                  ? styles.clipCardLast
                  : ""
              }`}
            >
              <div className={styles["card-content"]}>
                <div className="text-left 2xl:pl-[75px] 2xl:pb-[56px] xl:pl-[55px] xl:pb-[55px] lg:pl-[35px] lg:pb-[35px] max-[1024px]:pl-[12px] max-[1024px]:pb-[12px] mt-auto">
                  <h3 className="font-medium text-2xl">{card.title}</h3>
                  <h1 className="text-[#F79839] font-bold 2xl:text-9xl xl:text-[5rem] lg:text-[4rem] max-[1024px]:text-[2.5rem]">
                    {card.subtitle}
                  </h1>
                  <p className="font-light text-lg max-[1024px]:text-sm">{card.text1}</p>
                  <p className="font-light text-lg max-[1024px]:text-sm">{card.text2}</p>
                </div>
                <div>
                  {index === 2 ? (
                    <Image
                      src={card.img}
                      alt="image"
                      width={180}
                      height={103}
                      className="absolute top-[15%] right-[10%] max-[1024px]:w-[120px]"
                    />
                  ) : (
                    <Image
                      src={card.img}
                      alt="image"
                      width={114}
                      height={103}
                      className="absolute top-[15%] right-[10%] max-[1024px]:w-[78px]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverGlowCards;
