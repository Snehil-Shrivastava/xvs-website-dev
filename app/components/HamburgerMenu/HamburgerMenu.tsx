import React from "react";

const HamburgerMenu = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      className="fixed right-[4%] z-[9999] mt-6.5 sm:max-lg:mt-[38.5px] lg:max-xl:mt-12 xl:max-2xl:mt-13 min-[1536px]:max-[1905px]:mt-19 min-[1905px]:mt-19 cursor-pointer"
      onClick={toggle}
      aria-label="Toggle navigation menu"
    >
      {isOpen ? (
        // Close Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="18"
          viewBox="0 0 25 25"
          fill="none"
          className="w-[12px] h-[12px] sm:max-lg:w-7.5 sm:max-lg:h-5 lg:max-2xl:w-7 lg:max-2xl:h-4.5 min-[1536px]:max-[1905px]:w-7 min-[1536px]:max-[1905px]:h-4.5 min-[1905px]:w-8 min-[1905px]:h-6"
        >
          <path
            d="M1 1L24 24M24 1L1 24"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // Hamburger Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="18"
          viewBox="0 0 28 18"
          fill="none"
          className="w-[18.5px] h-[12px] sm:max-lg:w-7.5 sm:max-lg:h-5 lg:max-2xl:w-7 lg:max-2xl:h-4.5 min-[1536px]:max-[1905px]:w-7 min-[1536px]:max-[1905px]:h-4.5 min-[1905px]:w-8 min-[1905px]:h-6"
        >
          <g clipPath="url(#clip0_2340_560)">
            <path
              d="M12.1067 7.48649L13.8371 10.5254H27.5324V7.47607L12.1067 7.48649Z"
              fill="#F79839"
            />
            <path
              d="M7.85083 0.0125014L9.55207 2.99931H27.5323V0L7.85083 0.0125014Z"
              fill="#F79839"
            />
            <path
              d="M16.3894 15.0078L18.0677 17.956L27.5324 17.9998V15.0005L16.3894 15.0078Z"
              fill="#F79839"
            />
            <path
              d="M0 0L5.07663 8.97187L0 17.9292H5.06204L7.63422 13.437L10.2064 17.9292H15.2674L5.06204 0H0Z"
              fill="#F3EDDE"
            />
          </g>
          <defs>
            <clipPath id="clip0_2340_560">
              <rect width="27.5324" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};

export default HamburgerMenu;
