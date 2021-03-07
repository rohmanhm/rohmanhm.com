import '@/styles.scss'
import customTheme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for collection views (optional)
import 'rc-dropdown/assets/index.css'
import { FC } from 'react'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
