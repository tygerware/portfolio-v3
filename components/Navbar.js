import React, { useRef } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon
} from "@chakra-ui/react";
import NextLink from "next/link";
import useMediaQuery from "../hook/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const router = useRouter();
  var pageURL;

  if (router.asPath == "/projects") {
    pageURL = "/projects";
  } else if (router.asPath == "/blog") {
    pageURL = "/blog";
  } else {
    pageURL = "/";
  }

  const pageName = "~/tyger" + pageURL;

  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{pageName}</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              {/* <NextLink href="/photography" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Photography
                </Button>
              </NextLink> */}
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink href="/account" passHref>
                <Button as="a" variant="solid" colorScheme='blue' fontSize="16px">
                  Account
                </Button>
              </NextLink> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box zIndex="99">
      <Slide
        direction="top"
        reverse
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        background="black"
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background="black"
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              color="displayColor"
              fontWeight="bold"
              fontSize="32px"
            >
              {pageName}
            </Text>
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textSecondary">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/photography" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Photography
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink href="/account" passHref>
                <Button as="a" variant="solid" colorScheme="blue" p="4" ml="3vw" fontSize="16px">
                  Account
                </Button>
              </NextLink>{" "} */}
            </Box>
          ) : (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  );
}
