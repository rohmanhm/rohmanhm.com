import Footer from '#/components/Footer'
import '#/styles.scss'
import { AppProps } from 'next/app'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for collection views (optional)
import 'rc-dropdown/assets/index.css'
import React, { FC } from 'react'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyles } from 'twin.macro'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />

      {(Component as any).footer && <Footer />}
    </QueryClientProvider>
  )
}

export default MyApp
