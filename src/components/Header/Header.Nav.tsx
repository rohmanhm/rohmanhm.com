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
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Switch,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Container from 'components/Container/Container'
import MotionBox from 'components/MotionBox'
import NextLink from 'next/link'
import { FC, useRef } from 'react'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

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
              <Box>
                <Tooltip
                  label="Toggle Dark &amp; Light Mode"
                  hasArrow
                  placement="bottom"
                >
                  <FormControl display="flex" alignItems="center">
                    <Switch
                      colorScheme="primary"
                      onChange={colorMode.toggleColorMode}
                      isChecked={
                        Boolean(colorMode.colorMode === 'dark') || false
                      }
                      ml="2"
                      size="md"
                    />
                  </FormControl>
                </Tooltip>
              </Box>
            </Flex>
            <Spacer />
            <Flex>
              <form>
                <InputGroup>
                  <Input type="text" placeholder="Cari artikel..." />
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium magni fuga dolor necessitatibus eveniet, earum,
                  quo dignissimos quos expedita soluta repellendus illum
                  eligendi modi totam. Vero, necessitatibus soluta. Perferendis,
                  alias?
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
