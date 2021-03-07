import { Flex, FlexProps, forwardRef } from '@chakra-ui/react'

const Container = forwardRef<FlexProps, 'div'>(
  ({ children, ...props }, ref) => (
    <Flex
      ref={ref}
      maxWidth="1100px"
      width="calc(100vw - 90px)"
      margin="0 auto"
      {...props}
    >
      {children}
    </Flex>
  )
)

export default Container
