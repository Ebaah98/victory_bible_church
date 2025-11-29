'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AppConstant from '@/app';

const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')}>
        <Box
          bgGradient={useColorModeValue('linear(to-r, purple.700, pink.500)', 'linear(to-r, gray.800, gray.900)')}
          color={useColorModeValue('white', 'white')}
          py={16}
          textAlign="left"
          px={4}
          minH={{ base: '65vh', md: '75vh' }}
        >
          <Container maxW="5xl" h="full">
            <MotionStack
              spacing={4}
              align="flex-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1 }}
              h="full"
              justify="center"
            >
              <MotionHeading size="2xl">Contact Solid Rock Sanctuary</MotionHeading>
              <MotionText fontSize="lg" color={useColorModeValue('whiteAlpha.900', 'whiteAlpha.800')}>
                We would love to pray with you, answer questions, or help you find your place to serve. Reach out and
                we’ll be in touch.
              </MotionText>
              <HStack spacing={3} justify="flex-start" flexWrap="wrap">
                <Tag colorScheme="pink" size="lg">
                  Prayer Requests
                </Tag>
                <Tag colorScheme="purple" size="lg">
                  Visit Us
                </Tag>
                <Tag colorScheme="blue" size="lg">
                  Serve
                </Tag>
              </HStack>
            </MotionStack>
          </Container>
        </Box>

        <Container maxW="6xl" py={12}>
          <Stack spacing={6} textAlign="start" mb={6}>
            <Heading size="lg" color={useColorModeValue('purple.700', 'purple.200')}>
              Get in Touch
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
              We would love to pray with you, answer questions, or help you find your place to serve. Send us a note and
              we’ll be in touch.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <MotionStack
              as={Box}
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded="2xl"
              shadow="xl"
              border="1px solid"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              spacing={4}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              <Heading size="md" mb={4} color={useColorModeValue('purple.700', 'purple.200')}>
                Visit or Call
              </Heading>
              <VStack align="start" spacing={4} color={useColorModeValue('gray.700', 'gray.200')}>
                <Box>
                  <Text fontWeight="bold">Address</Text>
                  <Text>{AppConstant.churchAddress}</Text>
                  <Link
                    href="https://maps.app.goo.gl/trPPBJG33yJ8FpSd7"
                    color={useColorModeValue('pink.500', 'pink.200')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </Link>
                </Box>
                <Box>
                  <Text fontWeight="bold">Phone</Text>
                  <Link href={`tel:${AppConstant.phoneNumber}`} color={useColorModeValue('pink.500', 'pink.200')}>
                    {AppConstant.phoneNumber}
                  </Link>
                </Box>
                <Box>
                  <Text fontWeight="bold">Email</Text>
                  <Link href={`mailto:${AppConstant.churchEmail}`} color={useColorModeValue('pink.500', 'pink.200')}>
                    {AppConstant.churchEmail}
                  </Link>
                </Box>
                <Box>
                  <Text fontWeight="bold">Join us online</Text>
                  <VStack align="start" spacing={2}>
                    <Link
                      href={AppConstant.ZOOM_LIVE}
                      color={useColorModeValue('pink.500', 'pink.200')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zoom Live Stream
                    </Link>
                    <Link
                      href={AppConstant.FACEBOOK_LINK}
                      color={useColorModeValue('pink.500', 'pink.200')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </Link>
                    <Link
                      href={AppConstant.YOUTUBE_LINK}
                      color={useColorModeValue('pink.500', 'pink.200')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </Link>
                  </VStack>
                </Box>
                <Box>
                  <Text fontWeight="bold">Service Times</Text>
                  <VStack align="start" spacing={1}>
                    <HStack spacing={2}>
                      <Tag colorScheme="purple" size="sm">
                        Sunday
                      </Tag>
                      <Text>10:00 am – 12:30 pm</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Tag colorScheme="pink" size="sm">
                        Tuesday
                      </Tag>
                      <Text>6:00 pm – 7:30 pm</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Tag colorScheme="blue" size="sm">
                        Friday
                      </Tag>
                      <Text>7:00 pm – 8:30 pm</Text>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            </MotionStack>

            <MotionStack
              as="form"
              onSubmit={handleSubmit}
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded="2xl"
              shadow="xl"
              border="1px solid"
              borderColor={useColorModeValue('gray.100', 'gray.700')}
              spacing={4}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <Heading size="md" mb={4} color={useColorModeValue('purple.700', 'purple.200')}>
                Send Us a Message
              </Heading>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="you@example.com" />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input type="tel" placeholder="(000) 000-0000" />
                </FormControl>
                <FormControl>
                  <FormLabel>Reason for Reaching Out</FormLabel>
                  <Select placeholder="Select an option">
                    <option>Prayer Request</option>
                    <option>Visit / Directions</option>
                    <option>Join a Ministry</option>
                    <option>Volunteer</option>
                    <option>General Question</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Share how we can serve you" rows={5} />
                </FormControl>
                <Button type="submit" colorScheme="pink" size="lg">
                  Send Message
                </Button>
              </Stack>
            </MotionStack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
