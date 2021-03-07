import { Box, BoxProps, ComponentWithAs, forwardRef } from '@chakra-ui/react'
import { isValidMotionProp, motion, MotionProps } from 'framer-motion'
import React, { ElementType } from 'react'

type MotionBoxProps = Omit<BoxProps, keyof MotionProps> &
  MotionProps & {
    as?: ElementType
  }

const MotionBox = motion(
  forwardRef<MotionBoxProps, 'div'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
) as ComponentWithAs<'div', MotionBoxProps>

export default MotionBox
