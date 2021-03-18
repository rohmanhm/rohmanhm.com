// used for code syntax highlighting (optional)
import '@/app/code-theme.css'
import '@/app/styles.scss'
import configTheme from '@/configs/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
// used for collection views (optional)
import 'rc-dropdown/assets/index.css'
import { FC } from 'react'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={configTheme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
