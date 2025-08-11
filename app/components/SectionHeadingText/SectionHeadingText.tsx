'use client'

import Link from "next/link";

import styles from "./SectionHeadingText.module.css";

import * as motion from "motion/react-client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger);

const SectionHeadingText = ({
  SectionTitle,
  buttonTitle,
  size,
}: {
  SectionTitle: string;
  buttonTitle: string;
  size?: string;
}) => {
  const myStyles = {
    maskImage: "linear-gradient(to bottom, #00000080, transparent 82%)",
    fontSize: size,
  };

  const btnRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const btn = btnRef.current;
    const heading = headingRef.current;

    gsap.set(btn, { opacity: 0 });
    gsap.set(heading, { opacity: 0 });

    const tl = gsap.timeline()

    tl.to(heading, {
      scrollTrigger: {
        trigger: heading,
        // markers: true,
        scrub: 1,
        start: "top 60%",
        end: "top 40%",
        once: true,
      },
      opacity: 1,
    });

    tl.to(btn, {
      scrollTrigger: {
        trigger: btn,
        // markers: true,
        scrub: 1,
        start: "top bottom",
        end: "top 40%",
      },
      opacity: 1,
    }, "<");
  });

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    //   className="relative"
    // >
    //   <h1
    //     className="tracking-[36px] text-[11rem]/[11rem] font-bold text-white/[0.4]"
    //     style={myStyles}
    //   >
    //     {SectionTitle}
    //   </h1>
    //   {/* <div
    //     className={`${styles.btnContainer} absolute bottom-[32px] text-sm left-1/2 -translate-x-1/2 text-[#F79839] text-base bg-zinc-800/[0.4] backdrop-blur-2xl font-medium`}
    //   >
    //     <div className={`py-[12px] px-[28px] ${styles.btnLink}`}>
    //       <Link href="/" className={`${styles.btnStyle}`}>
    //         {buttonTitle}
    //       </Link>
    //     </div>
    //   </div> */}
    //   <div ref={btnRef} className={`absolute bottom-[42px] left-1/2 -translate-x-1/2 text-[#F79839] ${styles.btnContainerNew}`}>
    //     <Link className={`h-full flex items-center w-full justify-center ${styles.btnLinkNew}`} href='/'>
    //       <span className="mx-[16px]">{buttonTitle}</span>
    //     </Link>
    //   </div>
    // </motion.div>

    <div className="relative">
      <h1
        ref={headingRef}
        className="tracking-[36px] 2xl:text-[11rem]/[11rem] xl:text-[9rem]/[9rem] lg:text-[8rem]/[8rem] font-bold text-white/[0.4]"
        style={myStyles}
      >
        {SectionTitle}
      </h1>

      <div
        ref={btnRef}
        className={`absolute bottom-[42px] left-1/2 -translate-x-1/2 text-[#F79839] ${styles.btnContainerNew}`}
      >
        <Link
          className={`h-full flex items-center w-full justify-center ${styles.btnLinkNew}`}
          href="/"
        >
          <span className="mx-[16px]">{buttonTitle}</span>
        </Link>
      </div>

      {/* <div className="w-[180px] h-[56px] absolute left-1/2 -translate-x-1/2 bottom-[48px] opacity-[0.4] backdrop-blur-md" style={
        {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(75px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }
      }>

      </div> */}

    </div>
  );
};

export default SectionHeadingText;
