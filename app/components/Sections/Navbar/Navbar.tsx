"use client";

import Link from "next/link";

import "./Navbar.css";
import Modal from "../../Modal/Modal";

import MobileMenu from "../../MobileMenu/MobileMenu";
import XVSlogo from "../../SVGs/XVSlogo";

const Navbar = () => {
  return (
    <>
      <nav className="w-[90%] max-[426px]:h-[28px] max-[1906px]:pt-[70px] max-[1441px]:pt-[32px] max-[1026px]:pt-[32px] max-[769px]:pt-[32px] max-[426px]:pt-[18px] mx-auto flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-[9999]">
        <Link href="./" className="h-full">
          <XVSlogo />
        </Link>
        <MobileMenu />
      </nav>
    </>
  );
};

export default Navbar;
