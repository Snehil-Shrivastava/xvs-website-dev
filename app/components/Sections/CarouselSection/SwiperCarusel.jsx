"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper-custom.css";

import { useRef } from "react";
import HoverGlowCardsCarousel from "../../HoverGlowCardsCarousel/HoverGlowCardsCarousel";
import SectionHeadingText from "../../SectionHeadingText/SectionHeadingText";

export default () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cardData = [
    {
      id: 1, // Using a unique id is better for keys
      title: "Card 1",
      // imageUrl: "https://picsum.photos/id/10/500/300",
    },
    {
      id: 2,
      title: "Card 2",
      // imageUrl: "https://picsum.photos/id/20/500/300",
    },
    {
      id: 3,
      title: "Card 3",
      // imageUrl: "https://picsum.photos/id/30/500/300",
    },
    {
      id: 4,
      title: "Card 4",
      // imageUrl: "https://picsum.photos/id/40/500/300",
    },
    {
      id: 5,
      title: "Card 5",
      // imageUrl: "https://picsum.photos/id/50/500/300",
    },
  ];

  const loopedCardData = [...cardData, ...cardData];

  const swiperParams = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      EffectCoverflow,
      Autoplay,
    ],
    // spaceBetween={50}
    slidesPerView: "auto",
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // onSwiper={(swiper) => (swiperRef.current = swiper)}
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // initialSlide={3}
    // speed={600}
    // preventClicks={true}
    loop: true,
    // loopedSlides: 5,
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 600,
      modifier: 1,
      slideShadows: true,
    },

    onBeforeInit: (swiper) => {
      if (typeof swiper.params.navigation !== "boolean") {
        const navigation = swiper.params.navigation;
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }
    },
    className: "swiper-container",
  };

  return (
    <>
      <div className="mb-[28px] max-[426px]:mb-0">
        <SectionHeadingText
          SectionTitle="SERVICES"
          buttonTitle="VIEW SERVICES"
          size="8vw"
          tracking="2.8vw"
        />
      </div>
      <Swiper {...swiperParams}>
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
        <div className="max-[426px]:py-80px">
          {loopedCardData.map((card, index) => (
            // Using a more unique key: `card.id` combined with the index
            <SwiperSlide key={`${card.id}-${index}`}>
              <HoverGlowCardsCarousel />
            </SwiperSlide>
          ))}
        </div>

        <div
          ref={prevRef}
          className="swiper-button-custom swiper-button-prev-custom"
        >
          <FontAwesomeIcon
            className="max-[769px]:w-[1rem] max-[769px]:h-[1rem] min-[1024px]:w-[1.5rem] min-[1024px]:h-[1.5rem]"
            icon={faArrowLeft}
            // size="sm"
          />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-custom swiper-button-next-custom"
        >
          <FontAwesomeIcon
            className="max-[769px]:w-[1rem] max-[769px]:h-[1rem] min-[1024px]:w-[1.5rem] min-[1024px]:h-[1.5rem]"
            icon={faArrowRight}
            // size="sm"
          />
        </div>
      </Swiper>
    </>
  );
};
