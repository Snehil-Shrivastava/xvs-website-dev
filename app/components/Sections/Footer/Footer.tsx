import Link from "next/link";

import * as motion from "motion/react-client";

import "./Footer.css";
import Image from "next/image";

import logo from "../../../../public/assests/xvs-logo-icon.png";

import icon1 from "../../../../public/assests/Vector (3).png";
import icon2 from "../../../../public/assests/Vector (4).png";
import icon3 from "../../../../public/assests/Vector (5).png";
import icon4 from "../../../../public/assests/Exclude.png";
import icon5 from "../../../../public/assests/Vector (6).png";
import icon6 from "../../../../public/assests/Vector (7).png";

import meetingSchedIcon from "../../../../public/assests/schedule-meeting-logo.png";

const Footer = () => {
  return (
    <div className="mt-[170px] footer-container">
      <div className="footer-content-container">
        <div className="w-[85%] max-[769px]:w-[90%] mx-auto pb-[72px]">
          <div className="2xl:w-[90%] xl:w-[100%] mx-auto">
            <div className="flex gap-[48px] items-center justify-between pt-[111px] pb-[150px] max-[769px]:pt-[80px] max-[769px]:pb-[80px]">
              <div className="flex-1">
                <h1 className="2xl:text-[3.7rem]/[4rem] xl:text-[3.5rem]/[4.5rem] lg:text-[2rem]/[3rem] max-[1024px]:text-[1.5rem] font-bold tracking-wider 2xl:w-[780px] xl:w-[730px]">
                  Let's start creating together
                </h1>
              </div>
              <div className="flex-1 text-center flex justify-center">
                <div className=" box-shadow-glow">
                  <div className="footer-btn-container">
                    <Link
                      href="/"
                      className="xl:text-[1.2rem] lg:text-[1.4rem] text-[#F79839] tracking-wide px-[52px] py-[18px] xl:px-[32px] flex gap-[26px] xl:gap-[18px] max-[1025px]:gap-4 items-center max-[1025px]:px-[32px] max-[1025px]:py-[14px] footer-btn"
                    >
                      <Image
                        src={meetingSchedIcon}
                        alt="icon"
                        className="max-[1024px]:w-[24px] lg:w-8 xl:w-6"
                      />
                      <span>Schedule A Meeting</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-links-block">
              <div className="footer-link-block first justify-between">
                <div>
                  <Image src={logo} alt="" />
                </div>
                <div className="flex flex-wrap w-[98px] gap-[16px] items-center justify-center">
                  <Image src={icon1} alt="" />
                  <Image src={icon2} alt="" />
                  <Image src={icon3} alt="" />
                  <Image src={icon4} alt="" />
                  <Image src={icon5} alt="" />
                  <Image src={icon6} alt="" />
                </div>
              </div>
              <div className="footer-link-block second">
                <div className="max-[1025px]:w-[80%] max-[1025px]:mx-auto max-[769px]:flex max-[769px]:flex-col max-[769px]:h-full">
                  <h1 className="font-semibold text-[16px] mb-[16px]">
                    Contacts
                  </h1>
                  <p className="text-[16px] max-[1024px]:text-[0.75rem]/[1.5rem] max-[1024px]:font-extralight">
                    2nd Floor, 1/23 Rajni Khand, Sharda Nagar, Lucknow, UP
                    (226002), India.
                  </p>
                  <div className="flex gap-[32px] mt-[72px] max-[769px]:gap-[44px] max-[769px]:mt-auto">
                    <h1 className="text-[36px] max-[769px]:text-[2.2rem] max-[769px]:font-semibold">
                      Say Hi!
                    </h1>
                    <div>
                      <a href="" className="hover:underline text-[15px] max-[1024px]:text-[0.75rem] max-[1024px]:font-extralight">
                        info@xvscreations.com
                      </a>
                      <p className=" text-[15px] max-[1024px]:text-[0.75rem] max-[1024px]:font-extralight">+91-8726899713</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-link-block third">
                <h1 className="font-semibold text-[16px] mb-[16px]">
                  Services
                </h1>
                <div className="flex flex-col gap-[8px] text-[13px] max-[769px]:text-[0.75rem] max-[769px]:font-extralight">
                  <Link href="/" className="hover:underline">
                    Branding
                  </Link>
                  <Link href="/" className="hover:underline">
                    Graphic Design
                  </Link>
                  <Link href="/" className="hover:underline">
                    UI/UX Design
                  </Link>
                  <Link href="/" className="hover:underline">
                    Website Development
                  </Link>
                  <Link href="/" className="hover:underline">
                    Motion Graphics
                  </Link>
                  <Link href="/" className="hover:underline">
                    2D Animation
                  </Link>
                  <Link href="/" className="hover:underline">
                    Social Media Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#282828]">
        <div className="flex justify-between text-white/[0.5] w-[85%] mx-auto text-[14px] max-[769px]:text-[0.75rem] pt-[28px] pb-[12px]">
          <div>
            <p className="font-light">
              @ 2025 xVS Creations All Rights Reserved
            </p>
          </div>
          <div className="flex gap-[15px]">
            <Link href="/" className="hover:underline">
              Terms and conditions
            </Link>
            <Link href="/" className="hover:underline">
              Privacy Cookies
            </Link>
            <Link href="/" className="hover:underline">
              policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
