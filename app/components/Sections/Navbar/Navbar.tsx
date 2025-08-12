"use client";

import Image from "next/image";
import logo from "../../../../public/assests/xVS-logo.svg";
import hamburgerMenu from "../../../../public/assests/Hamburger.svg";
import Link from "next/link";

import "./Navbar.css";
import { useModal } from "../../../context/ModalContext";
import Modal from "../../Modal/Modal";

import * as motion from "motion/react-client";
import MobileMenu from "../../MobileMenu/MobileMenu";

const Navbar = () => {
  // @ts-ignore
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className=" w-4/5 h-[0] mx-auto mt-[32px] z-[9999] flex items-center justify-between fixed top-0 left-0 right-0"
      >
        <Link href="./" className="mt-[38px]">
          <Image src={logo} alt="logo" width={60} height={60} />
        </Link>
        <div
          className="hamburger mt-[38px] relative select-none"
          // onClick={toggleModal}
        >
          {/* <Image src={hamburgerMenu} alt="Menu" /> */}

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
          >
            <g clip-path="url(#clip0_2340_560)">
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
          </svg> */}

          <MobileMenu />
        </div>
        <Modal />
      </motion.nav>
    </>
  );
};

export default Navbar;
