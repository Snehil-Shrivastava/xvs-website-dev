// MotifSVG.tsx

// We pass `className` as a prop so we can style the two SVG layers differently.
const MotifSVG = ({ className }: { className?: string }) => {
  return (
    <svg width="100%" height="800px" className={className}>
      <defs>
        <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="65%" stopColor="black" />
        </linearGradient>
        <mask id="motifFadeMask">
          <rect
            x="0"
            y="0"
            width="170"
            height="170"
            fill="url(#fadeGradient)"
          />
        </mask>

        <linearGradient id="fadeGradientInvered" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="black" />
          <stop offset="65%" stopColor="white" />
        </linearGradient>
        <mask id="motifFadeMaskInverted">
          <rect
            x="0"
            y="0"
            width="170"
            height="170"
            fill="url(#fadeGradientInvered)"
          />
        </mask>
        <g id="motif">
          <path
            fill="none"
            // stroke="gray" is now controlled by CSS for better flexibility
            strokeWidth="1px"
            d="M0,0 L28.656,0 L42.985,25.233 L57.313,0 L85.97,0 L57.313,50.485 L85.97,100.93 L57.313,100.93 Z"
            mask="url(#motifFadeMask)"
          ></path>
          <g transform="translate(80, 50)">
            <path
              fill="none"
              // stroke="gray" is now controlled by CSS
              strokeWidth="1px"
              d="M0,0 L28.656,0 L42.985,25.233 L57.313,0 L85.97,0 L57.313,50.485 L85.97,100.93 L57.313,100.93 Z"
              transform="translate(85.97, 100.93) rotate(180)"
              mask="url(#motifFadeMaskInverted)"
            ></path>
          </g>
        </g>

        <pattern
          id="staggeredPattern"
          x="0"
          y="0"
          width="220"
          height="800"
          patternUnits="userSpaceOnUse"
        >
          {/* A bunch of <use> elements... */}
          <use href="#motif" x="50" y="-90" />
          <use href="#motif" x="0" y="0" />
          <use href="#motif" x="-65" y="90" />
          <use href="#motif" x="155" y="90" />
          <use href="#motif" x="90" y="190" />
          <use href="#motif" x="-130" y="190" />
          <use href="#motif" x="25" y="260" />
          <use href="#motif" x="-20" y="370" />
          <use href="#motif" x="200" y="370" />
          <use href="#motif" x="130" y="440" />
          <use href="#motif" x="-90" y="440" />
          <use href="#motif" x="80" y="530" />
          <use href="#motif" x="-140" y="530" />
          <use href="#motif" x="10" y="600" />
        </pattern>
      </defs>

      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#staggeredPattern)"
      ></rect>
    </svg>
  );
};

export default MotifSVG;