"use client";

import React from 'react';
import { Box, Container, Heading, Text, useColorModeValue, Stack, Tag, Button } from '@chakra-ui/react';

function Welcome() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.100');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bg} py={12}>
      <Container maxW="7xl">
        <Box
          bg={cardBg}
          border="1px solid"
          borderColor={borderColor}
          rounded="2xl"
          shadow="lg"
          p={{ base: 6, md: 10 }}
          w="full"
        >
          <Stack spacing={4} textAlign="start" align="flex-start">
            <Tag colorScheme="purple" size="lg" variant="subtle">
              Welcome Home
            </Tag>
            <Heading size="xl" color={color}>
              This is Victory Bible Church Solid Rock Sanctuary
            </Heading>
            <Text
              color={useColorModeValue('gray.600', 'gray.300')}
              fontSize="lg"
              lineHeight="tall"
              maxW="4xl"
              textAlign="justify"
            >
              At Victory Bible Solid Rock Sanctuary, we strive to create a welcoming and inclusive community where
              individuals can grow in their faith and find meaningful support through fellowship, prayer, and encouragement.
              Our doors are always open to those seeking spiritual guidance and a true sense of belonging.
            </Text>
            <Button colorScheme="pink" size="md" as="a" href="/contact" variant="solid">
              Visit or Reach Out
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Welcome;
