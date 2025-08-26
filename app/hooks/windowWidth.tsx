'use client'

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function to remove event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return windowWidth;
};

export default useWindowWidth;