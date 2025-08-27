"use client";

import Link from "next/link";

import "./Navbar.css";
import Modal from "../../Modal/Modal";

import MobileMenu from "../../MobileMenu/MobileMenu";
import XVSlogo from "../../SVGs/XVSlogo";

const Navbar = () => {
  return (
    <>
      <nav className="w-9/10 mx-auto">
        <div className="flex justify-between mt-4.5 h-7 sm:max-lg:mt-6.5 sm:max-lg:h-11.25 lg:max-xl:mt-7 lg:max-xl:h-14.5 xl:max-2xl:mt-8 xl:max-2xl:h-14.5 min-[1905px]:mt-12 min-[1905px]:h-20">
          <Link href="./" className="h-full">
            <XVSlogo />
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
