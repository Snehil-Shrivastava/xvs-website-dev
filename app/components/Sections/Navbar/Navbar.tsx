"use client";

import Image from "next/image";
import logo from "../../../../public/assests/xVS-logo.svg";
import hamburgerMenu from "../../../../public/assests/Hamburger.png";
import Link from "next/link";

import "./Navbar.css";
import { useModal } from "../../../context/ModalContext";
import Modal from "../../Modal/Modal";

import * as motion from 'motion/react-client'

const Navbar = () => {
  // @ts-ignore
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeIn' }} className=" w-4/5 h-[0] mx-auto mt-[32px] z-[9999] flex items-center justify-between fixed top-0 left-0 right-0">
        <Link href="./" className="mt-[38px]">
          <Image src={logo} alt="logo" width={60} height={60} />
        </Link>
        <div
          className="cursor-pointer hamburger mt-[38px] relative select-none"
          onClick={toggleModal}
        >
          <Image src={hamburgerMenu} alt="Menu" />
        </div>
        <Modal />
      </motion.nav>
    </>
  );
};

export default Navbar;
