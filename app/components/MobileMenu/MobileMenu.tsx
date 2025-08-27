"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-full relative flex items-center">
      {/* Button with hamburger/close toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-[9999]"
      >
        {isOpen ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 scale-[1.5] origin-center max-[426px]:scale-[0.75]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
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
            className="w-[18.5px] h-[12px] sm:max-lg:w-7.5 sm:max-lg:h-5"
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

      {/* Expanding menu */}
      {/* <div
        className={`bg-black/[0.1] fixed right-0 bottom-0 transition-transform duration-400 ease-in-out h-[100vh] w-[100vw] top-0 -left-[95px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 z-40 bg-[#F79839] flex flex-col items-center justify-center transition-transform duration-400 ease-in-out nav-modal ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-9/10 h-full flex flex-col gap-[120px]">
            <div className="w-full h-[120px] flex justify-center">
              <div className="w-4/5 ml-auto">
                <ul className="flex justify-between w-3/10 py-4 space-y-2 mx-auto gap-[64px] absolute top-[2%] text-2xl max-[769px]:text-[1.2rem] font-extralight max-[426px]:text-[1rem] max-[426px]:gap-[10px]">
                  <li>
                    <Link
                      href="/about"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 rounded"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 rounded"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={handleLinkClick}
                      className="block px-2 py-1 rounded"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="w-4/5 ml-auto grid grid-cols-2 gap-x-8 max-[426px]:gap-[62px]">
                <div className="flex flex-col gap-6">
                  <h3 className="font-medium max-[426px]:text-[0.8rem]">Identity and Design</h3>
                  <div>
                    <Link
                      className="text-6xl font-thin max-[769px]:text-[2.8rem] max-[426px]:text-[2rem]"
                      href="/branding"
                      onClick={handleLinkClick}
                    >
                      Branding
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="font-medium max-[426px]:text-[0.8rem]">Interface and Experience</h3>
                  <div>
                    <Link
                      className="text-6xl font-thin max-[769px]:text-[2.8rem] max-[426px]:text-[2rem]"
                      href="/branding"
                      onClick={handleLinkClick}
                    >
                      UI/UX
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Modal isOpen={isOpen} /> */}
    </div>
  );
}
