"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AppConstant from '@/app';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Box, useColorModeValue } from '@chakra-ui/react';

function Event() {
  const bg = useColorModeValue('white', 'gray.900');

  return (
    <Box className="p-4 shadow-2xl" bg={bg} rounded="xl" id="events">
      <Swiper
        modules={[Autoplay]}
        draggable
        spaceBetween={20}
        autoplay={{
          delay: 2000,
        }}
        loop
        slidesPerView={3}
      >
        {AppConstant.eventImages.map((res) => {
          return (
            <SwiperSlide key={res}>
              <Box
                as="img"
                src={res}
                alt={res}
                rounded="lg"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default Event;
