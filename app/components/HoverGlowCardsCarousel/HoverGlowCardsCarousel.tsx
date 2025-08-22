// "use client";

// import React, { useRef, useEffect } from "react";
// import styles from "./HoverGlowCardsCarousel.module.css";
// import Image from "next/image";

// import ProjectsImg from "../../../public/assests/layer.png";

// import Image3d from "../../../public/assests/UIux_0002 (square) 1.png";
// import AnimatedCardIcon from "../AnimatedCardIcon/AnimatedCardIcon";

// import animatedIcon from "../../../public/Sample.gif";

// const HoverGlowCardsCarousel = () => {
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     const cardsContainer = cardsContainerRef.current;

//     if (!cardsContainer) return;
//         // @ts-ignore
//     const handleMouseMove = (e) => {
//     // @ts-ignore
//       const cards = cardsContainer.getElementsByClassName(styles.card);

//       for (const card of cards) {
//         const rect = card.getBoundingClientRect();

//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         card.style.setProperty("--mouse-x", `${x}px`);
//         card.style.setProperty("--mouse-y", `${y}px`);
//       }
//     };

//     // @ts-ignore
//     cardsContainer.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       // @ts-ignore
//       cardsContainer.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className={styles.bodyContainer}>
//       <div id="cards" ref={cardsContainerRef} className={styles.cards}>
//         <div className={`${styles.card}`}>
//           <div className={styles["card-content"]}>
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%]">
//               <div className="scale-[2.3] absolute -top-[1rem]">
//                 <Image src={animatedIcon} alt="icon" />
//               </div>
//             </div>
//             <div className=" text-center w-[60%] mx-auto pb-[56px] mt-auto flex flex-col gap-[12px]">
//               <h3 className="font-bold text-6xl">UI/UX</h3>
//               <p className="font-light text-sm">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Reiciendis, alias molestias!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverGlowCardsCarousel;

/* testing */

"use client";

import React, { useRef, useEffect } from "react";
import styles from "./HoverGlowCardsCarousel.module.css";
import Image from "next/image";

import ProjectsImg from "../../../public/assests/layer.png";

import animatedIcon from "../../../public/Sample.gif";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Projects",
    subtitle: "500+",
    text1: "meaningful impact on businesses",
    text2: "with our design projects",
    img: ProjectsImg,
  },
];

const HoverGlowCards = () => {
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

  return (
    <div className={`${styles.bodyContainer}`}>
      <div id="cards" className={styles.cards} ref={cardsContainerRef}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${styles.cardShadowContainer} relative h-full backdrop-blur-sm`}
          >
            <div className={`${styles.card} backdrop-blur-sm`}>
              <div className={styles["card-content"]}>
                <div className="text-center w-[60%] max-[769px]:w-[90%] mx-auto pb-[56px] max-[769px]:pb-[42px] max-[426px]:pb-[1.25rem] mt-auto flex flex-col gap-[12px]">
                  <h3 className="font-bold text-6xl max-[426px]:text-[2rem]">
                    UI/UX
                  </h3>
                  <p className="font-light text-sm max-[426px]:text-[0.5rem] max-[426px]:w-4/5 max-[426px]:mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none">
          <div className="scale-[2.3] absolute -top-[1rem] max-[769px]:top-[-2rem]">
            <Image src={animatedIcon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverGlowCards;
