import Link from "next/link";

import "./NavigationModal.css";

import localFont from "next/font/local";

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
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#F79839] bg-opacity-95 text-white z-[999] transition-opacity duration-300 ease-in-out modal-container-outer ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* <div className="w-9/10 h-full flex flex-col gap-[120px]">
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
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={toggle}
                  className="block px-2 py-1 rounded"
                >
                  Blog
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
              <h3 className="font-medium max-[426px]:text-[0.8rem]">
                Identity and Design
              </h3>
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
              <h3 className="font-medium max-[426px]:text-[0.8rem]">
                Interface and Experience
              </h3>
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
      </div> */}
      <div className="h-full max-sm:w-9/10 mx-auto relative sm:max-lg:w-3/5 lg:max-xl:w-7/10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col gap-10 w-3/5 xl:max-2xl:gap-20 min-[1536px]:max-[1906px]:gap-30 min-[1906px]:gap-40">
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
      </div>
    </div>
  );
};

export default NavigationModal;
