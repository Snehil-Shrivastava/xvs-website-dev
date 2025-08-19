"use client"; // This is a client component

import React, { useRef, MouseEventHandler } from 'react';
import styles from './CardGlow.module.css'; // We'll create this CSS file next

// Define the props for our component
interface CardProps {
  children: React.ReactNode;
}

const CardGlow: React.FC<CardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;

    // Get the card's position and size
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate the mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the CSS variables for the glow position
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      className={styles.card} 
      ref={cardRef} 
      onMouseMove={handleMouseMove}
    >
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export default CardGlow;