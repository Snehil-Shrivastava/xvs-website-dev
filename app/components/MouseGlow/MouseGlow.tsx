'use client'

import React, { useState, useEffect } from 'react';

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isHovering && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x - 25, // Adjust for glow size
            top: mousePosition.y - 25, // Adjust for glow size
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(247, 152, 57, 0.19)', // Cyan glow
            boxShadow: '0 0 150px 50px rgba(247, 152, 57, 0.5)',
            pointerEvents: 'none', // Ensures glow doesn't block clicks
            transition: 'transform 0.1s ease-out', // Smooth movement
            zIndex: 9999,
          }}
        ></div>
      )}
    </>
  );
};

export default MouseGlow;