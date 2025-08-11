"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper-custom.css";

import { useRef } from "react";
import HoverGlowCardsCarousel from "../../HoverGlowCardsCarousel/HoverGlowCardsCarousel";
import SectionHeadingText from "../../SectionHeadingText/SectionHeadingText";

export default () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="mb-[28px]">
        <SectionHeadingText
          SectionTitle="SERVICES"
          buttonTitle="VIEW SERVICES"
        />
      </div>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
          Autoplay,
        ]}
        // spaceBetween={50}
        slidesPerView="auto"
        navigation
        autoplay
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // onSlideChange={() => console.log("slide change")}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        speed={600}
        preventClicks={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 600,
          modifier: 1,
          slideShadows: true,
        }}
        onClick={() => {
          if (
            swiperRef.current &&
            swiperRef.current.clickedIndex !== undefined
          ) {
            swiperRef.current.slideTo(swiperRef.current.clickedIndex);
          }
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <HoverGlowCardsCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HoverGlowCardsCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HoverGlowCardsCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HoverGlowCardsCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HoverGlowCardsCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HoverGlowCardsCarousel />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
