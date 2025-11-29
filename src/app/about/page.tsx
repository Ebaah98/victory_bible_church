"use client";

import React from "react";
import { Box, Container, Heading, Stack, Text, Flex, Image, useColorModeValue, Button } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import About from '@/components/About';

const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function AboutPage() {
  const heroBg = useColorModeValue('linear(to-r, purple.700, pink.500)', 'linear(to-r, gray.800, gray.900)');
  const heroText = useColorModeValue('whiteAlpha.900', 'whiteAlpha.800');

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <Box bgGradient={heroBg} color="white" py={16} px={4} minH={{ base: '65vh', md: '75vh' }}>
        <Container maxW="6xl" h="full">
          <Flex align={{ base: 'flex-start', md: 'center' }} direction={{ base: 'column', md: 'row' }} gap={8} h="full">
            <MotionStack
              spacing={4}
              flex="1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1 }}
            >
              <MotionHeading size="2xl" layout>About Solid Rock Sanctuary</MotionHeading>
              <MotionText fontSize="lg" color={heroText}>
                Learn more about our vision, what we believe, and the leaders who serve our church family.
              </MotionText>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                <Button colorScheme="pink" as="a" href="/contact">
                  Contact Us
                </Button>
                <Button variant="outline" colorScheme="whiteAlpha" as="a" href="/#donate">
                  Support the Ministry
                </Button>
              </Stack>
            </MotionStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" py={12}>
        <About />
      </Container>
    </Box>
  );
}
