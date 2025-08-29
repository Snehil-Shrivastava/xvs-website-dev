'use client'

import React, { useCallback, useEffect, useRef, useMemo } from 'react';
import './GridSVGBg.css';
import useWindowWidth from '@/app/hooks/windowWidth';

// Define types for better type safety
type CellId = string; // e.g., "5-10"

interface GridSVGProps {
  targetCellSize?: number;
  glowColor?: string;
  defaultCellFill?: string;
  defaultCellStroke?: string;
  animationIntervals?: number[];
  cellLitDuration?: number;
}

const GridSVG: React.FC<GridSVGProps> = ({
  targetCellSize = 40,
  glowColor = "#c46608",
  defaultCellFill = "#282828",
  defaultCellStroke = "rgba(243, 237, 222, 0.2)",
  animationIntervals = [500, 900, 1500, 2000, 2500], // Increased frequency for demo
  cellLitDuration = 2000,
}) => {
  const width = useWindowWidth();
  
  // Refs to manage animation without causing re-renders
  const litCellsTracker = useRef<Record<CellId, boolean>>({});
  const svgRef = useRef<SVGSVGElement>(null);

  // Dynamic grid calculation
  const gridSize = useMemo(() => {
    if (!width || targetCellSize <= 0) return 20;
    return Math.ceil(width / targetCellSize);
  }, [width, targetCellSize]);
  
  const cellSize = width / gridSize;

  // The core animation logic - now detached from React state
  const lightUpRandomCell = useCallback(() => {
    if (!svgRef.current) return;

    const MAX_PICK_ATTEMPTS = 20; // Lower attempts are fine now
    let attempts = 0;

    while (attempts < MAX_PICK_ATTEMPTS) {
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);
      const cellId: CellId = `${row}-${col}`;

      // Check for availability using the tracker ref
      let isAvailable = !litCellsTracker.current[cellId];
      if (isAvailable) {
        // Check neighbors
        for (let rOffset = -1; rOffset <= 1; rOffset++) {
          for (let cOffset = -1; cOffset <= 1; cOffset++) {
            const neighborId = `${row + rOffset}-${col + cOffset}`;
            if (litCellsTracker.current[neighborId]) {
              isAvailable = false;
              break;
            }
          }
          if (!isAvailable) break;
        }
      }

      if (isAvailable) {
        // Directly manipulate the DOM element
        const cellElement = svgRef.current.querySelector(`[data-id='${cellId}']`);
        if (cellElement) {
          litCellsTracker.current[cellId] = true;
          cellElement.classList.add('lit');

          setTimeout(() => {
            cellElement.classList.remove('lit');
            delete litCellsTracker.current[cellId];
          }, cellLitDuration);
        }
        return; // Exit loop once a cell is lit
      }
      attempts++;
    }
  }, [gridSize, cellLitDuration]);

  // Setup and teardown animation intervals
  useEffect(() => {
    // Clear any existing intervals when the component re-renders (e.g., on resize)
    const activeIntervals: NodeJS.Timeout[] = [];
    
    // Ensure the tracker is clean before starting
    litCellsTracker.current = {};

    animationIntervals.forEach(intervalTime => {
      const intervalId = setInterval(lightUpRandomCell, intervalTime);
      activeIntervals.push(intervalId);
    });

    return () => {
      activeIntervals.forEach(clearInterval);
    };
  }, [animationIntervals, lightUpRandomCell]);

  // Memoize the grid cells so they are only rendered when the size changes.
  // The animation will NOT trigger a re-render of these.
  const gridCells = useMemo(() => {
    const cells = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cellId: CellId = `${row}-${col}`;
        cells.push(
          <rect
            key={cellId}
            data-id={cellId} // Use data-id for easy querying
            x={col * cellSize}
            y={row * cellSize}
            width={cellSize}
            height={cellSize}
            stroke={defaultCellStroke}
            strokeWidth="1"
            className="grid-cell" // Start with the base class
          />
        );
      }
    }
    return cells;
  }, [gridSize, cellSize, defaultCellStroke]);

  return (
    <div className="grid-svg-container">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${width}`}
        xmlns="http://www.w3.org/2000/svg"
        className="grid-svg-content"
        preserveAspectRatio="xMidYMid slice"
        style={{
          '--glow-color': glowColor,
          '--default-cell-fill': defaultCellFill
        } as React.CSSProperties}
      >
        {gridCells}
      </svg>
    </div>
  );
};

export default React.memo(GridSVG);