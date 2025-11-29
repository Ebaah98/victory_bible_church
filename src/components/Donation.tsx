"use client";

import React from "react";
import AppConstant from "@/app";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Tag,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";

function Donation() {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const subtle = useColorModeValue("gray.600", "gray.300");
  const highlightBg = useColorModeValue("blue.100", "blue.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box id="donate" py={16} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="7xl">
        <Stack spacing={6} textAlign="center" mb={6}>
          <Tag colorScheme="green" size="lg" alignSelf="center">
            Support Our Ministry
          </Tag>
          <Heading size="lg" color={textColor}>
            Your donations are a vital part of spreading the gospel and supporting our ministry. We appreciate your generous
            support!
          </Heading>
        </Stack>

        <Stack direction={{ base: "column", md: "row" }} spacing={6} mb={8}>
          <Box flex="1" bg={cardBg} border="1px solid" borderColor={borderColor} rounded="2xl" p={8} shadow="md">
            <Heading size="md" color={textColor} mb={4}>
              Giving Options
            </Heading>
            <Stack spacing={4} color={textColor}>
              <OptionRow label="Cash App">
                <Tag bg={highlightBg} color={textColor} px={3} py={2} fontWeight="bold">
                  $vbciyonkers
                </Tag>
              </OptionRow>
              <OptionRow label="Cash App Email">
                <Text>{AppConstant.churchEmail}</Text>
              </OptionRow>
              <OptionRow label="Zelle">
                <Text>{AppConstant.churchEmail}</Text>
              </OptionRow>
              <OptionRow label="Contact Email">
                <Text>{AppConstant.churchEmail}</Text>
              </OptionRow>
            </Stack>
          </Box>

          <Box flex="1" bg={cardBg} border="1px solid" borderColor={borderColor} rounded="2xl" p={8} shadow="md">
            <Heading size="md" color={textColor} mb={4}>
              How Your Gift Helps
            </Heading>
            <Stack spacing={3} color={subtle}>
              <Text>📖 Sharing the gospel across Yonkers and beyond.</Text>
              <Text>🤝 Supporting community outreach and prayer gatherings.</Text>
              <Text>🎶 Equipping worship, media, and youth ministries.</Text>
              <Text>🏡 Caring for families through counseling and discipleship.</Text>
            </Stack>
          </Box>
        </Stack>

        <Accordion allowMultiple bg={cardBg} border="1px solid" borderColor={borderColor} rounded="2xl" shadow="md">
          <AccordionItem>
            <AccordionButton>
              <Heading size="md" flex="1" textAlign="left" color={textColor}>
                FAQs
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color={subtle}>
              <Stack spacing={3}>
                <Text fontWeight="semibold" color={textColor}>
                  How can I get involved?
                </Text>
                <Text>
                  Join us in person or online, serve with a ministry team, attend Bible study, or support through prayer and giving.
                </Text>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Heading size="md" flex="1" textAlign="left" color={textColor}>
                Is my donation tax deductible?
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color={subtle}>
              <Text>Yes. We can provide a giving statement upon request. Please include your email for receipts.</Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Heading size="md" flex="1" textAlign="left" color={textColor}>
                Can I set up recurring giving?
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color={subtle}>
              <Text>
                We currently receive recurring gifts via Cash App and Zelle; set a recurring transfer from your bank or app to
                {` ${AppConstant.churchEmail}`}.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Heading size="md" flex="1" textAlign="left" color={textColor}>
                Who do I contact with questions?
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} color={subtle}>
              <Text>
                Reach us at {AppConstant.churchEmail} or call {AppConstant.phoneNumber}. We’re happy to help.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}

export default Donation;

function OptionRow({ label, children }: { label: string; children: React.ReactNode }) {
  const labelColor = useColorModeValue("green.700", "green.200");
  return (
    <HStack spacing={3} align="center">
      <Text fontWeight="semibold" color={labelColor}>
        {label}:
      </Text>
      {children}
    </HStack>
  );
}
