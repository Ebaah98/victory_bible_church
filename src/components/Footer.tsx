"use client";

import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  Divider,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import AppConstant from "@/app";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Departments", id: "department" },
  { label: "Events", id: "events" },
  { label: "Contact", id: "contact" },
  { label: "Donate", id: "donate" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box bgGradient={useColorModeValue("linear(to-r, purple.800, purple.900)", "linear(to-r, gray.800, gray.900)")} color={useColorModeValue("whiteAlpha.900", "gray.100")} mt={16} pt={6} pb={6}>
      <Container maxW="7xl" py={14}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
          <Stack spacing={4}>
            <HStack spacing={3} align="center">
              <Image src="/logo.jpeg" alt={AppConstant.churchName} boxSize="72px" rounded="full" border="2px solid" borderColor="whiteAlpha.500" />
              <Heading size="md" color="white">
                Victory Bible Church International
              </Heading>
            </HStack>
            <Text>Solid Rock Sanctuary (Yonkers)</Text>
            <Text>{AppConstant.churchAddress}</Text>
            <Link href={`tel:${AppConstant.phoneNumber}`} color="pink.200" fontWeight="bold">
              {AppConstant.phoneNumber}
            </Link>
            <Link href={`mailto:${AppConstant.churchEmail}`} color="pink.200">
              {AppConstant.churchEmail}
            </Link>
            <Button
              as="a"
              href="#donate"
              onClick={handleScroll("donate")}
              colorScheme="pink"
              size="sm"
              w="fit-content"
            >
              Donate
            </Button>
          </Stack>

          <Stack spacing={3}>
            <Heading size="md" color="white">
              Quick Links
            </Heading>
            {quickLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={handleScroll(link.id)}
                _hover={{ color: "pink.200" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href={AppConstant.ZOOM_LIVE} color="pink.200" target="_blank" rel="noopener noreferrer">
              Join via Zoom
            </Link>
          </Stack>

          <Stack spacing={4}>
            <Heading size="md" color="white">
              Visit Us
            </Heading>
            <Box
              as="iframe"
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6026.321999430823!2d-73.87326462388778!3d40.956051722638946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ed14ad36610f%3A0xb15b63bc8a2f105c!2s1%20Tuckahoe%20Rd%2C%20Yonkers%2C%20NY%2010710!5e0!3m2!1sen!2sus!4v1744444923362!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              borderRadius="md"
              border="1px solid"
              borderColor="whiteAlpha.300"
              h="220px"
              w="100%"
            />
            <Stack spacing={1}>
              <Text fontWeight="semibold">Weekly Gatherings</Text>
              <Text>Prayer (Mon - Thu): 12:00 pm – 1:00 pm EST (Zoom)</Text>
              <Text>Tuesday (Avenor Park): 6:00 pm – 7:30 pm EST (In-person/Zoom)</Text>
              <Text>Friday (Aijalon Hour): 7:00 pm – 8:30 pm EST (Zoom)</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider borderColor="whiteAlpha.300" mt={8} />
      <Box textAlign="center" py={6} bg={useColorModeValue("purple.900", "gray.950")}>
        <Text fontSize="sm">
          © {currentYear} Victory Solid Rock Sanctuary — All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
