"use client";

import React, { useRef, useEffect } from "react";
import styles from "./HoverGlowCardsCarousel.module.css";
import Image from "next/image";

import ProjectsImg from "../../../public/assests/layer.png";

import Image3d from "../../../public/assests/UIux_0002 (square) 1.png";
import AnimatedCardIcon from "../AnimatedCardIcon/AnimatedCardIcon";

import animatedIcon from "../../../public/Sample.gif";

const cardData = [
  {
    title: "Projects",
    subtitle: "500+",
    text1: "meaningful impact on businesses",
    text2: "with our design projects",
    img: ProjectsImg,
  },
];

const HoverGlowCardsCarousel = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    if (!cardsContainer) return;

    // Event handler for mouse movement over the entire #cards container
    // @ts-ignore
    const handleMouseMove = (e) => {
      // Get all card elements within the container
      // @ts-ignore
      const cards = cardsContainer.getElementsByClassName(styles.card);

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        // Calculate mouse position relative to each card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables on each card for the radial gradient position
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    // Add the mousemove event listener to the container
    // @ts-ignore
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      // @ts-ignore
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className={styles.bodyContainer}>
      {" "}
      {/* Added a wrapper for body styles */}
      <div id="cards" ref={cardsContainerRef} className={styles.cards}>
        <div className={`${styles.card}`}>
          <div className={styles["card-content"]}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%]">
              {/* <Image src={Image3d} alt="image" className="absolute -top-[35%]" /> */}
              <div className="scale-[2.3] absolute -top-[1rem]">
                <Image src={animatedIcon} alt="icon" />
              </div>
            </div>
            <div className=" text-center w-[60%] mx-auto pb-[56px] mt-auto flex flex-col gap-[12px]">
              <h3 className="font-bold text-6xl">UI/UX</h3>
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, alias molestias!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverGlowCardsCarousel;
