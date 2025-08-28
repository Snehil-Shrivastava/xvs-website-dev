import Link from "next/link";

import "./NavigationModal.css";

import localFont from "next/font/local";
import Behance from "../SVGs/Behance";
import Instagram from "../SVGs/Instagram";
import Ball from "../SVGs/Ball";
import Facebook from "../SVGs/Facebook";
import LinkedIn from "../SVGs/LinkedIn";
import Twitter from "../SVGs/Twitter";

const calSans = localFont({
  src: '../../../public/fonts/CalSans-Regular.ttf'
})

const NavigationModal = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {

  if(!isOpen) {
    return null
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#F79839] bg-opacity-95 text-white z-[999] transition-opacity duration-300 ease-in-out modal-container-outer no-scroll ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="h-full max-sm:w-9/10 mx-auto relative sm:max-lg:w-7/10 lg:max-xl:w-4/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col gap-10 w-3/5 xl:max-2xl:gap-20 min-[1536px]:max-[1906px]:gap-30 min-[1906px]:gap-40 sm:max-lg:top-[38.5px] lg:max-xl:top-12 xl:max-2xl:top-13 min-[1536px]:max-[1905px]:top-19 min-[1905px]:top-19">
          <div className="flex justify-start items-center max-sm:gap-4 max-sm:text-[0.75rem] sm:max-lg:text-[1.2rem] sm:max-lg:gap-8 lg:max-xl:gap-10 lg:max-xl:text-[1.4rem] xl:max-2xl:text-[1.6rem] xl:max-2xl:gap-12 min-[1536px]:max-[1906px]:text-[1.8rem] min-[1536px]:max-[1906px]:gap-16 min-[1906px]:text-[2rem] min-[1906px]:gap-20 font-extralight">
            <Link href="/about" onClick={toggle}>About</Link>
            <Link href="/about" onClick={toggle}>Work</Link>
            <Link href="/about" onClick={toggle}>Blog</Link>
            <Link href="/contact" onClick={toggle}>Contact</Link>
          </div>
          <div className="max-xl:flex max-xl:flex-col gap-9 grid grid-cols-2 xl:max-2xl:gap-15 min-[1536px]:max-[1906px]:gap-18 min-[1906px]:gap-25">
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">Idenitiy and Design</h3>
              <Link href="/branding" className={`${calSans.className} max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}>Branding</Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">Print and Digital</h3>
              <Link href="/branding" className={`${calSans.className} max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}>Graphic Design</Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">Motion Craft</h3>
              <Link href="/branding" className={`${calSans.className} max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}>Editing and Motion Graphics</Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">Interface and Experience</h3>
              <Link href="/branding" className={`${calSans.className} max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}>UI/UX</Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">Design and Development</h3>
              <Link href="/branding" className={`${calSans.className} max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}>Web and App</Link>
            </div>
            <div>
              <h3 className="max-sm:text-[0.625rem] sm:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] min-[1536px]:max-[1906px]:text-[1.2rem] min-[1906px]:text-[1.4rem]">Design and Modelling</h3>
              <Link href="/branding" className={`${calSans.className} max-sm:text-[1.8rem]/[2.5rem] sm:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-2xl:text-[3rem]/[3.75rem] min-[1536px]:max-[1906px]:text-[3.2rem]/[4rem] min-[1906px]:text-[3.8rem]/[4.5rem]`}>3D Product and Animations</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[5%] right-0 xl:right-[4%] flex gap-2 sm:max-lg:gap-4  lg:max-2xl:gap-4 2xl:gap-4.5">
          <Link href='/'>
            <Behance />
          </Link>
          <Link href='/'>
            <Instagram />
          </Link>
          <Link href='/'>
            <Ball />
          </Link>
          <Link href='/'>
            <Facebook />
          </Link>
          <Link href='/'>
            <LinkedIn />
          </Link>
          <Link href='/'>
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationModal;
