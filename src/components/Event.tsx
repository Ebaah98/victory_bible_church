"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AppConstant from '@/app'
import "swiper/css";
import 'swiper/css/autoplay'

type Props = {};

function Event({}: Props) {
  return (
    <div className="p-4 shadow-2xl">
          <Swiper
              modules={[Autoplay]}
        draggable
        spaceBetween={20}
        autoplay={{
          delay:2000
        }}
              loop
        slidesPerView={3}
      
      >
        {AppConstant.eventImages.map((res) => {
          return (
            <SwiperSlide >
              <img src={res} alt={res} className="aspect-square rounded-lg" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Event;
