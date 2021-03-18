import Container from '@/components/Container'
import MotionBox from '@/components/MotionBox'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  FlexProps,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC, useRef } from 'react'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { HiMoon, HiSun } from 'react-icons/hi'

const HeaderContainer: FC<FlexProps> = ({ children, ...props }) => (
  <Container height="100%" alignItems="center" {...props}>
    {children}
  </Container>
)

const HEADER_HEIGHT = '70px'

const HeaderNav: FC = () => {
  const colorMode = useColorMode()
  const { isOpen, onClose, onToggle } = useDisclosure()
  const headerRef = useRef(null)

  const color = useColorModeValue('white', 'gray.900')
  const border = useColorModeValue('gray.300', 'gray.700')

  const isDarkmode = colorMode.colorMode === 'dark'

  return (
    <>
      <Box
        ref={headerRef}
        as="header"
        position="fixed"
        width="100%"
        zIndex={500}
      >
        <Box
          position="relative"
          borderBottom="1px solid"
          borderBottomColor={border}
          height={HEADER_HEIGHT}
          alignItems="center"
          bg={color}
          zIndex={501}
        >
          <HeaderContainer>
            <Flex>
              <MotionBox
                animate={{
                  rotateZ: isOpen ? 45 : 0,
                  display: isOpen ? 'none' : 'block',
                }}
                transition={{ duration: 0.1 }}
                initial={false}
              >
                <FiMenu size="2em" onClick={onToggle} />
              </MotionBox>
              <MotionBox
                initial={{ display: 'none' }}
                animate={{
                  rotateZ: isOpen ? 0 : -45,
                  display: isOpen ? 'block' : 'none',
                }}
                transition={{ duration: 0.1 }}
              >
                <FiX size="2em" onClick={onToggle} />
              </MotionBox>
            </Flex>
            <Spacer />
            <Flex alignItems="center">
              <Heading as="h1">
                <NextLink href="/" passHref>
                  <Link>ROHMANHM</Link>
                </NextLink>
              </Heading>
              <Box ml={4}>
                <Tooltip
                  label="Toggle Dark &amp; Light Mode"
                  hasArrow
                  placement="bottom"
                >
                  <FormControl display="flex" alignItems="center">
                    <Icon
                      cursor="pointer"
                      color={isDarkmode ? 'yellow.500' : 'blue.900'}
                      as={isDarkmode ? HiSun : HiMoon}
                      onClick={colorMode.toggleColorMode}
                      w={7}
                      h={7}
                    />
                  </FormControl>
                </Tooltip>
              </Box>
            </Flex>
            <Spacer />
            <Flex>
              <form>
                <InputGroup>
                  <Input type="text" placeholder="Search article..." disabled />
                  <InputRightElement>
                    <FiSearch />
                  </InputRightElement>
                </InputGroup>
              </form>
            </Flex>
          </HeaderContainer>
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          portalProps={{ appendToParentPortal: true, containerRef: headerRef }}
        >
          <DrawerOverlay zIndex={500}>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody pt={HEADER_HEIGHT}>
                <Box p={4}>
                  Thanks for clicking the navigation menu, but it&apos;s not
                  implemented yet.
                </Box>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default HeaderNav
