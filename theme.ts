import { extendTheme, theme } from '@chakra-ui/react'

const colors = {
  primary: theme.colors.blue,
}

const customTheme = extendTheme({ colors })
export default customTheme
