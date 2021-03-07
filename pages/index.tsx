import HeaderNav from '@/components/Header/Header.Nav'
import NotionPage from '@/components/NotionPage'
import useNotionPageQuery from '@/hooks/useNotionPageQuery'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const rootPageId = '9b2e142bd33f4774960e015282ec07e6'

const IndexPage = () => {
  const { data, isLoading } = useNotionPageQuery({ pageId: rootPageId })
  return (
    <Container id="home-page">
      <Head>
        <title>Rohman HM</title>
      </Head>

      <HeaderNav />
      <NotionPage autoTitle={false} recordMap={data} loading={isLoading} />
    </Container>
  )
}

IndexPage.footer = true

export default IndexPage
