"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation"; // optional
import "swiper/css/pagination"; // optional

import Logo1 from "../../../public/assests/Layer_1 (2).png";
import Logo2 from "../../../public/assests/logo_paytm.svg";

import "./ReviewsThumbSlider.css";
import AutoScrollStrip from "../AutoScrollStrip/AutoScrollStrip";

export default function SwiperGallery() {
  const ClientReviews = [
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
      logo: Logo1,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
      logo: Logo2,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
      logo: Logo1,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
      logo: Logo2,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
      logo: Logo1,
    },
    {
      quote:
        "l didn't feel like I chased anyone, everything was punctual, and I had a good idea when the next delivery would be.",
      logo: Logo2,
    },
  ];
  return (
    <>

      <div className="gallery">
        <Swiper
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          initialSlide={1}
          autoplay={{
            delay: 4000,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {ClientReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="text-black flex flex-col gap-[32px] mb-[52px] w-[75%] mx-auto max-[426px]:mb-0 max-[426px]:gap-[1rem]">
                <h4 className="font-semibold w-full text-[20px] max-[1024px]:text-[1rem] max-[426px]:text-[0.5rem]">
                  {`"${review.quote}"`}
                </h4>
                <p className="text-sm max-[1024px]:text-[0.75rem] w-[147px] mx-auto max-[426px]:text-[0.375rem] max-[426px]:w-[3rem]">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <AutoScrollStrip />
      </div>
    </>
  );
}
