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

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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

  const cardLayerRef = useRef(null);

  useGSAP(() => {
    const cardLayer = cardLayerRef.current;

    const tl = gsap.timeline();

    tl.to(cardLayer, {
      scrollTrigger: {
        trigger: cardLayer,
        // markers: true,
        start: 'top 60%',
        end: 'top 40%',
        scrub: 1
      },
      width: 0
    });
  });

  return (
    <>
      <div ref={cardLayerRef} className="absolute inset-0 bg-[#282828] z-[5]"></div>

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
              <div className="text-black flex flex-col gap-[32px] mb-[52px] w-[75%] mx-auto">
                <h4 className="font-semibold w-full text-[20px]">
                  {`"${review.quote}"`}
                </h4>
                <p className="text-sm w-[147px] mx-auto">
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
