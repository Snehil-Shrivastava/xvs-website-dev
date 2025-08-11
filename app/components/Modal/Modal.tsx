"use client";

import Image from "next/image";
import { useModal } from "../../context/ModalContext";
import Link from "next/link";

import closeIcon from "../../../public/assests/close-icon.png";

const Modal = () => {
  // @ts-ignore
  const { isOpen, toggleModal } = useModal();

  return (
    <div
      className="bg-black/[0.8] fixed inset-0 z-[9999] modal-container"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="bg-[#F79839] h-full nav-modal">
        <div className="relative top-[38px]">
          <div className="absolute left-1/2 -translate-x-1/2 w-[60%] flex gap-[110px] pl-[72px] text-2xl font-light select-none">
            <Link href="/about" onClick={toggleModal}>
              About
            </Link>
            <Link href="/about" onClick={toggleModal}>
              Blog
            </Link>
            <Link href="/services" onClick={toggleModal}>
              Services
            </Link>
            <Link href="/contact" onClick={toggleModal}>
              Contact
            </Link>
          </div>
          <Image
            src={closeIcon}
            alt="Close"
            className="absolute right-[185px] cursor-pointer select-none font-light"
            onClick={toggleModal}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
