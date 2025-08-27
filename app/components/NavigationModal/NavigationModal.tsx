import Link from "next/link";
import React from "react";

const NavigationModal = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#F79839] bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 z-45 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="w-9/10 h-full flex flex-col gap-[120px]">
            <div className="w-full h-[120px] flex justify-center">
              <div className="w-4/5 ml-auto">
                <ul className="flex justify-between w-3/10 py-4 space-y-2 mx-auto gap-[64px] absolute top-[2%] text-2xl max-[769px]:text-[1.2rem] font-extralight max-[426px]:text-[1rem] max-[426px]:gap-[10px]">
                  <li>
                    <Link
                      href="/about"
                      onClick={toggle}
                      className="block px-2 py-1 rounded"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      onClick={toggle}
                      className="block px-2 py-1 rounded"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={toggle}
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
                      onClick={toggle}
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
                      onClick={toggle}
                    >
                      UI/UX
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default NavigationModal;
