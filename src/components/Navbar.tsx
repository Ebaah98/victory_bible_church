'use client';

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { Menu as MenuIcon, Moon, Sun } from 'lucide-react';
import React from 'react';
import AppConstant from '@/app';
import NextLink from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const brandColor = useColorModeValue('white', 'yellow.200');
  const drawerBg = useColorModeValue('purple.800', 'gray.900');
  const drawerText = useColorModeValue('white', 'gray.100');
  const drawerBorder = useColorModeValue('whiteAlpha.200', 'gray.700');

  const bgGradient = useColorModeValue('linear(to-r, purple.600, purple.700)', 'linear(to-r, gray.800, gray.900)');

  const handleNav = (href: string) => (event: React.MouseEvent) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const id = href.slice(hashIndex + 1);
      const el = document.getElementById(id);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    onClose();
  };

  return (
    <Box as="header" bgGradient={bgGradient} boxShadow="lg" position="sticky" top={0} zIndex={20}>
      <Container maxW="6xl" py={3}>
        <Flex align="center" justify="space-between">
          <HStack spacing={3} align="center">
            <Image src="/logo.jpeg" alt={AppConstant.churchName} boxSize="40px" rounded="full" border="2px solid" borderColor="whiteAlpha.500" />
            <Text color={brandColor} fontWeight="extrabold" fontSize="lg">
              {AppConstant.churchName}
            </Text>
          </HStack>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }} color="white">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                as={NextLink}
                href={link.href}
                fontWeight="bold"
                _hover={{ color: 'purple.100' }}
                onClick={handleNav(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <HStack spacing={3}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              variant="ghost"
              color="white"
              onClick={toggleColorMode}
              _hover={{ bg: 'whiteAlpha.200' }}
            />
            <Button
              as={NextLink}
              href="/#donate"
              onClick={handleNav('/#donate')}
              colorScheme="pink"
              size="sm"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              Donate
            </Button>
            <IconButton
              aria-label="Open menu"
              icon={<MenuIcon size={20} />}
              variant="ghost"
              color="white"
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={onOpen}
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </HStack>
        </Flex>
      </Container>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={drawerBg} color={drawerText}>
          <DrawerCloseButton color={drawerText} />
          <DrawerHeader borderBottomWidth="1px" borderColor={drawerBorder}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  as={NextLink}
                  href={link.href}
                  fontWeight="semibold"
                  onClick={handleNav(link.href)}
                  _hover={{ color: 'purple.100' }}
                >
                  {link.label}
                </Link>
              ))}
              <Button as={NextLink} href="/#donate" colorScheme="pink" onClick={handleNav('/#donate')}>
                Donate
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
