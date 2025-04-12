"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/autoplay'

type Props = {};

const eventImages = [
  "/pastor2.png",
  "/pastor3.jpg",
  "/pastor2.png",
  "/pastor3.jpg",
  "/pastor2.png",
  "/pastor3.jpg",
  "/pastor2.png",
  "/pastor3.jpg",
  "/pastor2.png",
  "/pastor3.jpg",
 
];

function Event({}: Props) {
  return (
    <div className="p-4 shadow-2xl">
          <Swiper
              modules={[Autoplay]}
        draggable
        spaceBetween={1}
        autoplay
              loop
              slidesPerView={3}

      >
        {eventImages.map((res) => {
          return (
            <SwiperSlide>
              <img src={res} alt={res} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Event;
