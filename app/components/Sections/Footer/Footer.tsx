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
        <div className="w-[85%] mx-auto pb-[72px]">
          <div className="2xl:w-[90%] xl:w-[100%] mx-auto">
            <div className="flex gap-[48px] items-center justify-between pt-[111px] pb-[150px] max-[769px]:pt-[80px] max-[769px]:pb-[80px]">
              <div className="flex-1">
                <h1 className="2xl:text-[3.7rem]/[4rem] xl:text-[3.5rem]/[4.5rem] lg:text-[2rem]/[3rem] max-[1024px]:text-[1.5rem] font-bold tracking-wider 2xl:w-[780px] xl:w-[730px]">
                  Let's start creating together
                </h1>
              </div>
              <div className="flex-1 text-center flex justify-center">
                <Link
                  href="/"
                  className="xl:text-[26px] lg:text-[1.2rem] text-[#F79839] tracking-wide border border-[#6e6a69] px-[52px] py-[18px] flex gap-[26px] items-center max-[1024px]:px-[20px]"
                >
                  <Image src={meetingSchedIcon} alt="icon" className="max-[1024px]:w-[24px]" />
                  <span>Schedule A Meeting</span>
                </Link>
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
                <div className="max-[1025px]:w-[60%] max-[1025px]:mx-auto max-[769px]:flex max-[769px]:flex-col max-[769px]:h-full">
                  <h1 className="font-semibold text-[16px] mb-[16px]">
                    Contacts
                  </h1>
                  <p className="text-[16px]">
                    2nd Floor, 1/23 Rajni Khand, Sharda Nagar, Lucknow, UP
                    (226002), India.
                  </p>
                  <div className="flex gap-[32px] mt-[72px] max-[769px]:flex-col max-[769px]:mt-auto max-[769px]:gap-[0px]">
                    <h1 className="text-[36px] max-[769px]:text-[20px]">Say Hi!</h1>
                    <div>
                      <a href="" className="hover:underline text-[15px]">
                        info@xvscreations.com
                      </a>
                      <p className=" text-[15px]">+91-8726899713</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-link-block third">
                <h1 className="font-semibold text-[16px] mb-[16px]">
                  Services
                </h1>
                <div className="flex flex-col gap-[8px]">
                  <Link href="/" className="hover:underline text-[13px]">
                    Branding
                  </Link>
                  <Link href="/" className="hover:underline text-[13px]">
                    Graphic Design
                  </Link>
                  <Link href="/" className="hover:underline text-[13px]">
                    UI/UX Design
                  </Link>
                  <Link href="/" className="hover:underline text-[13px]">
                    Website Development
                  </Link>
                  <Link href="/" className="hover:underline text-[13px]">
                    Motion Graphics
                  </Link>
                  <Link href="/" className="hover:underline text-[13px]">
                    2D Animation
                  </Link>
                  <Link href="/" className="hover:underline text-[13px]">
                    Social Media Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#282828]">
        <div className="flex justify-between text-white/[0.5] w-[85%] mx-auto text-[14px] pt-[28px] pb-[12px]">
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
