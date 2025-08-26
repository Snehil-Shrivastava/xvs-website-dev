'use client'

import React, { useCallback, useEffect, useRef, useState } from "react";

import './grid-svg.css'

const GridSVG = () => {
  // Define grid dimensions
  const gridSize = 35; // For a 10x10 grid
  const svgViewBoxSize = 1950; // A fixed viewBox size for consistent cell sizing
  const cellSize = svgViewBoxSize / gridSize;

  const [litCells, setLitCells] = useState({});

  const litCellsRef = useRef(litCells);

  const [hoveredCell, setHoveredCell] = useState(null);

  // Define the single color for the glow effect.
  const glowColor = "#c46608"; // Deep Sky Blue - a vibrant single color for the glow

  // Default fill color for cells when they are not lit.
  const defaultCellFill = "#282828"; // A dark grey for the cell background
  // Default stroke (border) color for all cells.
  const defaultCellStroke = "rgba(243, 237, 222, 0.2)"; // A slightly lighter grey for the grid lines

  useEffect(() => {
    litCellsRef.current = litCells;
  }, [litCells]);

  // @ts-ignore
  const isCellAvailable = useCallback(
    // @ts-ignore
    (row, col, currentLitCells, gridDimension) => {
      const cellId = `${row}-${col}`;
      // 1. Check if the cell itself is already lit.
      if (currentLitCells[cellId]) {
        return false;
      }

      // 2. Check all 8 neighbors (including diagonals).
      for (let rOffset = -1; rOffset <= 1; rOffset++) {
        for (let cOffset = -1; cOffset <= 1; cOffset++) {
          // Skip the cell itself (0,0 offset).
          if (rOffset === 0 && cOffset === 0) continue;

          const neighborRow = row + rOffset;
          const neighborCol = col + cOffset;

          // Check if the neighbor is within the grid bounds.
          if (
            neighborRow >= 0 &&
            neighborRow < gridDimension &&
            neighborCol >= 0 &&
            neighborCol < gridDimension
          ) {
            const neighborId = `${neighborRow}-${neighborCol}`;
            // If any neighbor is currently lit, this cell is not available.
            if (currentLitCells[neighborId]) {
              return false;
            }
          }
        }
      }
      // If neither the cell nor its neighbors are lit, it's available.
      return true;
    },
    []
  ); // No dependencies, so this function is stable.

  const lightUpRandomCell = useCallback(() => {
    // Maximum attempts to find a suitable cell to prevent infinite loops
    // in cases where the grid might become too saturated.
    const MAX_PICK_ATTEMPTS = gridSize * gridSize * 2;
    let attempts = 0;
    let foundSuitableCell = false;
    // @ts-ignore
    let randomRow, randomCol, cellId;

    // Access the latest litCells state via the ref.
    const currentLitCells = litCellsRef.current;

    // Loop to find a random cell that is available (not lit and no lit neighbors).
    while (attempts < MAX_PICK_ATTEMPTS && !foundSuitableCell) {
      randomRow = Math.floor(Math.random() * gridSize);
      randomCol = Math.floor(Math.random() * gridSize);
      cellId = `${randomRow}-${randomCol}`;

      // Use the helper function to check availability.
      if (isCellAvailable(randomRow, randomCol, currentLitCells, gridSize)) {
        foundSuitableCell = true;
      }
      attempts++;
    }

    // If a suitable cell was found, light it up.
    if (foundSuitableCell) {
      setLitCells((prevLitCells) => ({
        ...prevLitCells, // Copy all existing lit cells
        // @ts-ignore
        [cellId]: glowColor, // Always use the single glowColor
      }));

      // Set a timeout to revert the cell's color back to its default after a short delay.
      setTimeout(() => {
        setLitCells((prevLitCells) => {
          // Create a new object to avoid direct mutation of state.
          const newLitCells = { ...prevLitCells };
          // Remove the cell from the lit state, causing it to revert to its default fill color.
          // @ts-ignore
          delete newLitCells[cellId];
          return newLitCells;
        });
      }, 2000); // The cell will stay lit for 500 milliseconds (half a second).
    }
  }, [glowColor, gridSize, isCellAvailable]); // Dependencies: glowColor, gridSize, and isCellAvailable (memoized).

  // useEffect hook to manage the interval for lighting up cells.
  // It runs once after the initial render (due to empty dependency array)
  // and sets up a timer that repeatedly calls lightUpRandomCell.
  useEffect(() => {
    // Set an interval to call lightUpRandomCell every 200 milliseconds.
    const interval = setInterval(lightUpRandomCell, 1000); // A new cell attempts to light up every 200ms.

    // The cleanup function returned by useEffect is called when the component unmounts.
    // This is crucial to prevent memory leaks by clearing the interval.
    return () => {
      clearInterval(interval);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  useEffect(() => {
    // Set an interval to call lightUpRandomCell every 200 milliseconds.
    const interval2 = setInterval(lightUpRandomCell, 1500); // A new cell attempts to light up every 200ms.

    // The cleanup function returned by useEffect is called when the component unmounts.
    // This is crucial to prevent memory leaks by clearing the interval.
    return () => {
      clearInterval(interval2);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  useEffect(() => {
    // Set an interval to call lightUpRandomCell every 200 milliseconds.
    const interval3 = setInterval(lightUpRandomCell, 2000); // A new cell attempts to light up every 200ms.

    // The cleanup function returned by useEffect is called when the component unmounts.
    // This is crucial to prevent memory leaks by clearing the interval.
    return () => {
      clearInterval(interval3);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  useEffect(() => {
    // Set an interval to call lightUpRandomCell every 200 milliseconds.
    const interval4 = setInterval(lightUpRandomCell, 2500); // A new cell attempts to light up every 200ms.

    // The cleanup function returned by useEffect is called when the component unmounts.
    // This is crucial to prevent memory leaks by clearing the interval.
    return () => {
      clearInterval(interval4);
    };
  }, [lightUpRandomCell]); // Dependency: lightUpRandomCell (memoized by useCallback).

  // Helper function to render all the individual SVG rectangle cells.
  const renderGridCells = () => {
    const cells = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cellId = `${row}-${col}`;
        // Determine the fill color: if the cell is in `litCells`, use its color; otherwise, use the default.
        const fillColor =
          // @ts-ignore
          litCells[cellId] ||
          (hoveredCell === cellId ? glowColor : defaultCellFill);

        cells.push(
          // @ts-ignore
          <rect
            key={cellId} // Unique key for each React element in a list is crucial for performance and stability.
            x={col * cellSize} // X-coordinate of the top-left corner of the rectangle.
            y={row * cellSize} // Y-coordinate of the top-left corner of the rectangle.
            width={cellSize} // Width of the rectangle.
            height={cellSize} // Height of the rectangle.
            fill={fillColor} // Dynamic fill color based on whether the cell is lit.
            stroke={defaultCellStroke} // Stroke (border) color.
            strokeWidth="1" // Stroke width.
            // Apply Tailwind CSS classes for a smooth transition effect when the color changes.
            className={`transition-all duration-300 ease-in-out box-shadow`}
            // @ts-ignore
            onMouseEnter={() => setHoveredCell(cellId)}
            onMouseLeave={() => setHoveredCell(null)}
          />
        );
      }
    }
    return cells;
  };
  return (
    <svg
      width="100%" // SVG takes 100% width of its parent container.
      height="100%" // SVG takes 100% height of its parent container.
      // Set a fixed viewBox for consistent scaling of the grid cells.
      // viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
      xmlns="http://www.w3.org/2000/svg"
      // Tailwind classes for styling the SVG container itself.
      className={`rounded-2xl grid-container pointer-events-none`}
    >
      {/* Render all the dynamically created grid cells */}
      {renderGridCells()}
    </svg>
  );
};

export default GridSVG;
