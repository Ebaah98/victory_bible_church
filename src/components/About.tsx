"use client";

import React from "react";
import AppConstant from "@/app";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  useColorModeValue,
  List,
  ListItem,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);

function About() {
  const cardBg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.300");
  const titleColor = useColorModeValue("purple.800", "purple.200");
  const accent = useColorModeValue("purple.500", "purple.300");

  return (
    <Box id="about" py={12}>
      <Container maxW="6xl">
        <Stack spacing={10}>
          <MotionStack
            spacing={2}
            textAlign="center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9 }}
          >
            <Heading size="2xl" color={titleColor}>
              VICTORY BIBLE CHURCH INTERNATIONAL - USA
            </Heading>
            <Text fontStyle="italic" color={muted}>
              "Raising the Foundations for Many Generations" — Isaiah 58:12
            </Text>
          </MotionStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {[
              {
                badge: "Vision",
                badgeColor: "purple",
                title: "A Biblically Functioning Community",
                body: "We reach people with the gospel in their geographic, demographic, cultural, and spiritual context.",
              },
              {
                badge: "Mission",
                badgeColor: "pink",
                title: "Develop Fully Functioning Followers",
                body: "To convert people within our community in all creative ways, developing them into fully functioning followers of Jesus Christ.",
              },
            ].map((card, idx) => (
              <MotionCard
                key={card.title}
                bg={cardBg}
                shadow="md"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: idx * 0.12 }}
              >
                <CardBody>
                  <Badge colorScheme={card.badgeColor} mb={2}>
                    {card.badge}
                  </Badge>
                  <Heading size="md" color={titleColor} mb={2}>
                    {card.title}
                  </Heading>
                  <Text color={muted}>{card.body}</Text>
                </CardBody>
              </MotionCard>
            ))}
          </SimpleGrid>

          <MotionCard
            bg={cardBg}
            shadow="md"
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <CardBody>
              <Heading size="lg" color={titleColor} mb={3}>
                What We Believe
              </Heading>
              <List spacing={2} styleType="disc" pl={4} color={muted}>
                <ListItem>The Bible is the inspired Word of God, our ultimate authority.</ListItem>
                <ListItem>Jesus Christ is the Son of God, our Lord and Savior, who died and rose again.</ListItem>
                <ListItem>Salvation is by grace through faith in Christ alone.</ListItem>
                <ListItem>The Holy Spirit empowers believers for godly living and effective ministry.</ListItem>
                <ListItem>The Church is the body of Christ, called to worship, fellowship, serve, and evangelize.</ListItem>
              </List>
            </CardBody>
          </MotionCard>

          <MotionCard
            bg={cardBg}
            shadow="md"
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <CardBody>
              <Heading size="lg" color={titleColor} mb={3}>
                Our History
              </Heading>
              <Text color={muted} lineHeight="tall">
                Victory Bible Church – Solid Rock Sanctuary began with a small group of faithful believers, united by a desire
                to go deeper in God and raise a generation built on the Rock—Jesus Christ. Under the divine direction of our
                founding father, Bishop N.A. Tackie Yarboi, and in consultation with Bishop Elijah P. Saforo, the vision for
                our sanctuary was prayerfully established. Through prayer and the leading of the Holy Spirit, God saw it fit
                that we would spread His Word in Yonkers, New York. From humble beginnings, we’ve grown into a vibrant and
                passionate community committed to pursuing God and serving His people with purpose.
              </Text>
            </CardBody>
          </MotionCard>

          <Stack spacing={3}>
            <Heading size="lg" color={titleColor}>
              Leadership
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
              {AppConstant.PASTORS.filter(Boolean).map((pastor, idx) => (
                <MotionCard
                  key={idx}
                  shadow="md"
                  overflow="hidden"
                  bg={cardBg}
                  border="1px solid"
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: 0.12 * idx }}
                  minH="360px"
                >
                  <AspectRatio ratio={1} w="100%">
                    <Image
                      src={pastor?.image}
                      alt={pastor?.name}
                      objectFit="contain"
                      bg={useColorModeValue("gray.50", "gray.700")}
                    />
                  </AspectRatio>
                  <CardBody textAlign="center" pt={4}>
                    <Heading size="md" color={titleColor}>
                      {pastor?.name}
                    </Heading>
                    <Text color={muted}>{pastor?.role}</Text>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </Stack>

          <MotionCard
            bg={cardBg}
            shadow="md"
            border="1px solid"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <CardBody>
              <Heading size="lg" color={titleColor} mb={2}>
                Join the Family
              </Heading>
              <Text color={muted}>
                Whether you’re new to the faith or have been walking with God for years, we welcome you with open arms.
                There's a place for you here—come and grow with us as we stand together on the Solid Rock!
              </Text>
            </CardBody>
          </MotionCard>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
