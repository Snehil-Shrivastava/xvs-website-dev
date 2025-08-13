"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button with hamburger/close toggle */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative p-2 rounded-md focus:outline-none z-50 cursor-pointer"
      >
        {isOpen ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
      <div className={`bg-black/[0.5] fixed inset-0 transition-all duration-300 ease-in-out ${
        isOpen
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-110 pointer-events-none'
      }`}>
      <div
        className={`fixed inset-0 z-40 bg-[#F79839] flex flex-col items-center justify-center transition-all duration-300 ease-in-out nav-modal ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110 pointer-events-none"
        }`}
      >
        <ul className="flex p-4 space-y-2 mx-auto gap-[64px] absolute top-[2%] text-2xl max-[769px]:text-[1.2rem]">
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
    </div>
  );
}
