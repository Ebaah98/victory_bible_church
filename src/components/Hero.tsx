"use client";

import React from 'react';
import {
  Box,
  Button,
  Heading,
  BoxProps,
  StackProps,
  HeadingProps,
  TextProps,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Container,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import AppConstant from '@/app';
import { motion, type MotionProps } from 'framer-motion';

const MotionStack = motion(Stack) as React.ComponentType<StackProps & MotionProps>;
const MotionHeading = motion(Heading) as React.ComponentType<HeadingProps & MotionProps>;
const MotionText = motion(Text) as React.ComponentType<TextProps & MotionProps>;
const MotionBox = motion(Box) as React.ComponentType<BoxProps & MotionProps>;

function Hero() {
  const overlay = useColorModeValue('rgba(0,0,0,0.35)', 'rgba(0,0,0,0.55)');
  const accent = useColorModeValue('purple.200', 'yellow.200');
  const cardBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.500');

  return (
    <Box
      id="home"
      bgGradient={useColorModeValue('linear(to-r, purple.600, pink.500)', 'linear(to-r, gray.800, gray.900)')}
      position="relative"
      overflow="hidden"
      minH="100vh"
      py={{ base: 10, md: 12 }}
    >
      <Box
        position="absolute"
        inset={0}
        bgImage="url('/hero.jpg')"
        bgSize="cover"
        bgPos="center"
        opacity={0.2}
      />
      <Box position="absolute" inset={0} bg={overlay} />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap={10} minH="80vh">
          <MotionStack
            spacing={5}
            flex={{ base: '1', lg: '1' }}
            w={{ base: '100%', lg: '50%' }}
            color="white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 } as any}
          >
            <MotionHeading size="2xl" layout>
              Welcome to Solid Rock Sanctuary
            </MotionHeading>
            <MotionText fontSize="lg" color="whiteAlpha.900">
              Experience the love, faith, and community in Christ.
            </MotionText>
            <Stack
              color={accent}
              spacing={1}
              fontWeight="extrabold"
              fontSize="xl"
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 } as any}
            >
              <Text as="span">My year of</Text>
              <Text as="span" px={3} py={1} bg="purple.500" color="white" rounded="md" w="fit-content">
                RAISING THE
              </Text>
              <Text as="span" px={3} py={1} bg="purple.500" color="white" rounded="md" w="fit-content">
                FOUNDATIONS
              </Text>
              <Text as="span" px={3} py={1} bg="purple.500" color="white" rounded="md" w="fit-content">
                OF MANY GENERATIONS
              </Text>
            </Stack>
            <Text color="purple.200" fontWeight="bold">
              ISAIAH 58:12
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
              <Button colorScheme="pink" size="lg">
                Join Us
              </Button>
              <Button variant="outline" colorScheme="whiteAlpha" size="lg" as="a" href="/#events">
                View Events
              </Button>
            </Stack>
          </MotionStack>

          <MotionBox
            flex={{ base: '1', lg: '1' }}
            w={{ base: '100%', lg: '50%' }}
            bg={cardBg}
            rounded="2xl"
            p={{ base: 4, md: 5 }}
            shadow="2xl"
            border="1px solid"
            borderColor={useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')}
            backdropFilter="blur(6px)"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1 } as any}
          >
            <Stack spacing={2} mb={3} color={useColorModeValue('gray.700', 'gray.200')}>
              <Text fontSize="sm" letterSpacing="wide" textTransform="uppercase" color={useColorModeValue('purple.700', 'purple.200')}>
                Moments from our gatherings
              </Text>
              <Text fontSize="sm">
                Glimpses of worship, community, and joy across Solid Rock Sanctuary.
              </Text>
            </Stack>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500 }}
              loop
              spaceBetween={16}
              slidesPerView={1}
              speed={1200}
            >
              {AppConstant.eventImages.slice(0, 6).map((src) => (
                <SwiperSlide key={src}>
                  <Box
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    rounded="xl"
                    shadow="md"
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h={{ base: '300px', md: '420px' }}
                  >
                    <Box
                      as="img"
                      src={src}
                      alt="Church event"
                      maxW="100%"
                      maxH="100%"
                      objectFit="contain"
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;
