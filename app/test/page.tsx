'use client'

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SvgScrollTransition() {
  const container = useRef(null);
  const svgRef = useRef(null);
  const targetRef = useRef(null); // The destination in bottom section

  useGSAP(() => {
    // Measure the final target's position and scale

    //@ts-ignore
    const targetRect = targetRef.current.getBoundingClientRect();
        //@ts-ignore
    const svgRect = svgRef.current.getBoundingClientRect();

    // Calculate deltas for position/scale
    const yDelta = targetRect.top - svgRect.top;
    const xDelta = targetRect.left - svgRect.left;
    const scale = targetRect.width / svgRect.width;

    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: svgRef.current, // Pin the SVG while animating
        anticipatePin: 1
      }
    })
      .to(svgRef.current, {
        // x: xDelta,
        // y: yDelta,
        scale: scale,
        ease: "power1.inOut"
      });

  }, { dependencies: [] });

  return (
    // <div ref={container} style={{ minHeight: "200vh", position: "relative", border: '1px solid white', padding: '8px' }}>
    //   {/* Top Section */}
    //   <div style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", border: '1px solid green' }}>
    //     <svg
    //       ref={svgRef}
    //       width="100"
    //       height="100"
    //       style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
    //     >
    //       <circle cx="50" cy="50" r="40" fill="tomato" />
    //     </svg>
    //   </div>
    //   {/* Bottom Section */}
    //   <div style={{ minHeight: "80vh", position: "relative", border: '1px solid blue' }}>
    //     <div ref={targetRef} style={{
    //       width: "40px",
    //       height: "40px",
    //       position: "absolute",
    //       left: "50%",
    //       top: "40px",
    //     //   transform: "translateX(-50%)",
    //       pointerEvents: "none",
    //     }} />
    //   </div>
    // </div>

    <div>
      <div></div>
      <div></div>
    </div>
  );
}
