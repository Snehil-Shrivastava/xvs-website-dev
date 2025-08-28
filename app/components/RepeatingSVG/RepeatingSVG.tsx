"use client";

import { useRef } from "react";
import styles from "./RepeatingSVG.module.css";
import MotifSVG from "../MotifSVG";

const RepeatingSVG = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set CSS custom properties (variables) on the container
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`absolute -top-[10px] left-0 right-0 h-[828px] z-[55] ${styles.repeatingBgContainer}`}
    >
      {/* Layer 1: The base, dimmer SVG */}
      <div className={styles.baseLayer}>
        <MotifSVG className="" />
      </div>

      {/* Layer 2: The glowing SVG, revealed by the mouse mask */}
      <div className={styles.glowLayer}>
        <MotifSVG className="" />
      </div>
    </div>
  );
};

export default RepeatingSVG;
