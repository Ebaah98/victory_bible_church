"use client";

import React from "react";
import AppConstant from "@/app";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

interface TestimonyType {
  title: string;
  text: string;
  img: string;
}

function Testimony() {
  const bg = useColorModeValue("white", "gray.900");
  const titleColor = useColorModeValue("gray.900", "gray.100");
  const cardBg = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const nameColor = useColorModeValue("gray.900", "white");

  return (
    <Box bg={bg} py={12}>
      <Container maxW="7xl">
        <Heading textAlign="center" mb={8} color={titleColor}>
          What People Are Saying
        </Heading>
        <Swiper
          modules={[Autoplay, FreeMode]}
          autoplay={{ delay: 1, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={8000}
          loop
          loopAdditionalSlides={AppConstant.testimonies.length}
          freeMode={{ enabled: true, momentum: false }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {AppConstant.testimonies.map((item, index) => (
            <SwiperSlide key={`${item.title}-${index}`}>
              <TestimonyCard title={item.title} text={item.text} img={item.img} cardBg={cardBg} textColor={textColor} nameColor={nameColor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default Testimony;

function TestimonyCard({
  title,
  text,
  img,
  cardBg,
  textColor,
  nameColor,
}: TestimonyType & { cardBg: string; textColor: string; nameColor: string }) {
  return (
    <Box bg={cardBg} p={6} rounded="2xl" shadow="md" height="100%">
      <Text color={textColor} fontStyle="italic">
        {text}
      </Text>
      <Stack direction="row" spacing={4} align="center" mt={4}>
        <Avatar name={title} src={img} />
        <Text fontWeight="semibold" color={nameColor}>
          {title}
        </Text>
      </Stack>
    </Box>
  );
}
