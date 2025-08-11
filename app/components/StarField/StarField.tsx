"use client";

import React, { useRef, useEffect } from 'react';

// Define the props for the Starfield component
interface StarfieldProps {
  starCount?: number;
  starColor?: [number, number, number];
  speedFactor?: number;
  backgroundColor?: string;
  className?: string;
  // New prop to control the random drift
  randomDriftFactor?: number;
}

const Starfield: React.FC<StarfieldProps> = ({
  starCount = 5000,
  starColor = [255, 255, 255],
  speedFactor = 0.05,
  backgroundColor = 'black',
  className = '',
  // Default drift factor is a small value for subtle movement
  randomDriftFactor = 0.2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // A function to create a star with random properties
    const createStar = () => {
      // Calculate a random direction vector
      const direction = Math.random() * Math.PI * 2;
      const speed = Math.random() * randomDriftFactor;
      
      return {
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        // NEW: Add dx and dy for random direction movement
        dx: Math.cos(direction) * speed,
        dy: Math.sin(direction) * speed,
      };
    };
    
    // A function to reset a star's position
    const resetStar = (star: any) => {
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
        star.z = width; // Reset to the far end
    };

    let stars = Array.from({ length: starCount }, createStar);

    let animationFrameId: number;

    const draw = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      
      ctx.save();
      ctx.translate(width / 2, height / 2);

      stars.forEach(star => {
        // NEW: Update position with random drift
        star.x += star.dx;
        star.y += star.dy;
        
        // Still move along z-axis for depth effect
        star.z -= speedFactor;
        
        const k = width / star.z;
        const px = star.x * k;
        const py = star.y * k;
        
        // NEW: Reset condition is now based on screen boundaries
        if (px < -width / 2 || px > width / 2 || py < -height / 2 || py > height / 2 || star.z <= 0) {
          resetStar(star);
        }
        
        const size = (1 - star.z / width) * 7;
        const opacity = 1 - star.z / width;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${opacity})`;
        ctx.arc(px, py, size / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, starColor, speedFactor, backgroundColor, randomDriftFactor]);

  const styles: React.CSSProperties = {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100%',
    zIndex: -1,
    background: backgroundColor,
  };

  return <canvas ref={canvasRef} style={styles} className={className} />;
};

export default Starfield;