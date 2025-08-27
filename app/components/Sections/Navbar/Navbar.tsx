"use client";

import Link from "next/link";

import "./Navbar.css";
import Modal from "../../Modal/Modal";

import MobileMenu from "../../MobileMenu/MobileMenu";
import XVSlogo from "../../SVGs/XVSlogo";
import { useState } from "react";
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import NavigationModal from "../../NavigationModal/NavigationModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <nav className="w-9/10 mx-auto fixed left-1/2 -translate-x-1/2 z-50">
        <div className="flex justify-between mt-4.5 h-7 sm:max-lg:mt-6.5 sm:max-lg:h-11.25 lg:max-xl:mt-7 lg:max-xl:h-14.5 xl:max-2xl:mt-8 xl:max-2xl:h-14.5 min-[1536px]:max-[1905px]:mt-8 min-[1536px]:max-[1905px]:h-14.5 min-[1905px]:mt-12 min-[1905px]:h-20">
          <Link href="./" className="h-full z-[99]">
            <XVSlogo />
          </Link>
          {/* <MobileMenu /> */}
          <HamburgerMenu isOpen={isModalOpen} toggle={toggleModal} />
        </div>
      </nav>
      <NavigationModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default Navbar;
