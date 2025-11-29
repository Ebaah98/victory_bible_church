'use client';

import React from 'react';
import AppConstant from '@/app';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  useColorModeValue,
  VStack,
  Badge,
  HStack,
  Link,
  Tag,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { MapPin, Phone, Mail, Video, Facebook, Youtube, Church, Users, Clock, Music, HandHeart } from 'lucide-react';

const ChurchFlyer = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const innerBg = useColorModeValue('gray.50', 'gray.700');
  const textMuted = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box id="contact" bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="7xl">
        <Box
          bg={cardBg}
          color={useColorModeValue('gray.900', 'white')}
          rounded="2xl"
          shadow="xl"
          border="1px solid"
          borderColor={borderColor}
          p={{ base: 6, md: 8 }}
        >
          <Stack spacing={8}>
            <Stack textAlign="center" spacing={2}>
              <Tag colorScheme="purple" size="lg" alignSelf="center">
                Visit & Connect
              </Tag>
              <Heading size="lg">Victory Bible Church International</Heading>
              <Text color={textMuted}>{AppConstant.churchName} (Yonkers)</Text>
              <Text color={useColorModeValue('purple.600', 'purple.200')} fontWeight="semibold">
                You are welcome 🙌
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              <Box bg={innerBg} rounded="xl" p={5} border="1px solid" borderColor={borderColor}>
                <Heading size="md" mb={3}>
                  Gatherings
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} color={useColorModeValue('gray.800', 'gray.100')}>
                  <Activity title="Sunday Service" time="10:00 am – 12:30 pm (In-person & Online)" icon={Church} />
                  <Activity title="Mon–Thu Prayer" time="12:00 pm – 1:00 pm (Zoom)" icon={HandHeart} />
                  <Activity title="Leadership Meeting" time="Mon 9:00 pm – 10:00 pm (Zoom)" icon={Users} />
                  <Activity title="Avenor Park Prayer" time="Tue 6:00 pm – 7:30 pm (In-person & Zoom)" icon={MapPin} />
                  <Activity title="Aijalon Hour" time="Fri 12:00 pm – 1:00 pm (Zoom)" icon={Clock} />
                  <Activity title="Friday Service" time="Fri 7:00 pm – 8:30 pm (In-person & Online)" icon={Music} />
                </SimpleGrid>
              </Box>

              <Box bg={innerBg} rounded="xl" p={5} border="1px solid" borderColor={borderColor}>
                <Heading size="md" mb={3}>
                  Join Us
                </Heading>
                <VStack align="start" spacing={3} color={textMuted}>
                  <HStack spacing={3}>
                    <Icon as={MapPin} color={useColorModeValue('purple.600', 'purple.200')} />
                    <Text fontWeight="bold">Address:</Text>
                    <Text color={useColorModeValue('gray.800', 'gray.100')}>{AppConstant.churchAddress}</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={Phone} color={useColorModeValue('pink.600', 'pink.200')} />
                    <Text fontWeight="bold">Phone:</Text>
                    <Link href={`tel:${AppConstant.phoneNumber}`} color={useColorModeValue('pink.600', 'pink.200')}>
                      {AppConstant.phoneNumber}
                    </Link>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={Mail} color={useColorModeValue('pink.600', 'pink.200')} />
                    <Text fontWeight="bold">Email:</Text>
                    <Link href={`mailto:${AppConstant.churchEmail}`} color={useColorModeValue('pink.600', 'pink.200')}>
                      {AppConstant.churchEmail}
                    </Link>
                  </HStack>
                  <HStack spacing={3} pt={2}>
                    <Button
                      as={Link}
                      href={AppConstant.ZOOM_LIVE}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="pink"
                      size="sm"
                    >
                      <HStack spacing={2}>
                        <Icon as={Video} boxSize={4} />
                        <Text>Zoom Access</Text>
                      </HStack>
                    </Button>
                    <Button
                      as={Link}
                      href="https://maps.app.goo.gl/trPPBJG33yJ8FpSd7"
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="purple"
                      variant="outline"
                      size="sm"
                    >
                      <HStack spacing={2}>
                        <Icon as={MapPin} boxSize={4} />
                        <Text>Directions</Text>
                      </HStack>
                    </Button>
                  </HStack>
                </VStack>
                <Divider my={4} />
                <Stack direction="row" spacing={3} align="center">
                  <Badge colorScheme="red">LIVE</Badge>
                  <Text color={useColorModeValue('gray.800', 'gray.100')}>VBCI Yonkers</Text>
                </Stack>
              </Box>
            </SimpleGrid>

            <Stack direction="row" spacing={4} align="center" justify="center" color={textMuted}>
              <Text>Watch us live:</Text>
              <HStack spacing={2}>
                <HStack
                  as={Link}
                  href={AppConstant.YOUTUBE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="pink.500"
                  spacing={1}
                >
                  <Icon as={Youtube} boxSize={4} />
                  <Text>YouTube</Text>
                </HStack>
                <HStack
                  as={Link}
                  href={AppConstant.FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue.400"
                  spacing={1}
                >
                  <Icon as={Facebook} boxSize={4} />
                  <Text>Facebook</Text>
                </HStack>
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ChurchFlyer;

const Activity = ({ title, time, icon: IconComp }: { title: string; time: string; icon: React.ElementType }) => (
  <Stack spacing={1}>
    <HStack spacing={2} align="center">
      <Icon as={IconComp} boxSize={4} color={useColorModeValue('purple.600', 'purple.200')} />
      <Text fontWeight="bold">{title}</Text>
    </HStack>
    <Text color="gray.600" _dark={{ color: 'gray.200' }}>
      {time}
    </Text>
  </Stack>
);
