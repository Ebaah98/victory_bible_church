'use client';

import React from 'react';
import AppConstant from '@/app';
import { Box, Container, Heading, Text, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';

const Departments = () => {
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardHover = useColorModeValue('purple.50', 'gray.700');
  const titleColor = useColorModeValue('purple.800', 'purple.200');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box id="department" py={12} bg={sectionBg}>
      <Container maxW="7xl">
        <Stack spacing={4} textAlign="center" mb={8}>
          <Heading size="lg" color={titleColor}>
            Departments & Ministries
          </Heading>
          <Text color={textColor}>
            Discover the teams that serve, worship, and build community at Solid Rock Sanctuary.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
          {AppConstant.departments.map((dept, idx) => (
            <Box
              key={idx}
              px={5}
              py={5}
              rounded="xl"
              bg={cardBg}
              color={titleColor}
              border="1px solid"
              borderColor={borderColor}
              shadow="md"
              transition="all 0.2s ease"
              _hover={{ bg: cardHover, shadow: 'lg' }}
            >
              <Text fontWeight="semibold" textAlign="center" fontSize="lg">
                {dept}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default Departments;
