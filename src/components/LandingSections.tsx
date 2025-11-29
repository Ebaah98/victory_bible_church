'use client';

import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Event from '@/components/Event';
import Welcome from '@/components/Welcome';
import Departments from '@/components/Department';
import Contact from '@/components/Contact';
import Testimony from '@/components/Testimony';
import Donation from '@/components/Donation';

const MotionBox = motion(Box);
const sectionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 },
};

function LandingSections() {
  return (
    <Box>
      <Stack spacing={12}>
        <Hero />
        <MotionBox {...sectionProps}>
          <Event />
        </MotionBox>
        <MotionBox {...sectionProps}>
          <Welcome />
        </MotionBox>
        <MotionBox {...sectionProps}>
          <Departments />
        </MotionBox>
        <MotionBox {...sectionProps}>
          <Contact />
        </MotionBox>
        <MotionBox {...sectionProps}>
          <Testimony />
        </MotionBox>
        <MotionBox {...sectionProps}>
          <Donation />
        </MotionBox>
      </Stack>
    </Box>
  );
}

export default LandingSections;
