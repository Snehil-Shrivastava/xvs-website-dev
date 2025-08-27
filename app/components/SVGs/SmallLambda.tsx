import React from "react";

const SmallLambda = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="139"
      height="162"
      viewBox="0 0 139 162"
      fill="none"
      className="h-15.5 w-13"
    >
      <g filter="url(#filter0_d_3595_2121)">
        <path
          d="M131.646 0.000213623L89.9105 76.6471L134.643 151.435L91.5217 152.29L68.8932 114.785L47.7262 153.145L4.64258 154L88.5244 0.855134L131.646 0.000213623Z"
          fill="#F79839"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3595_2121"
          x="0.642578"
          y="0.000213623"
          width="138"
          height="162"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3595_2121"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3595_2121"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SmallLambda;
