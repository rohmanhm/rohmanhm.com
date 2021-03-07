import useNotionPageQuery from '@/hooks/useNotionPageQuery'
import Container from 'components/Container/Container'
import HeaderNav from 'components/Header/Header.Nav'
import NotionPage from 'components/NotionPage/NotionPage'
import Head from 'next/head'

const rootPageId = '9b2e142bd33f4774960e015282ec07e6'

const IndexPage = () => {
  const { data, isLoading } = useNotionPageQuery({ pageId: rootPageId })
  return (
    <>
      <HeaderNav />
      <Head>
        <title>Rohman HM</title>
      </Head>
      <Container id="home-page" position="relative">
        <NotionPage autoTitle={false} recordMap={data} loading={isLoading} />
      </Container>
    </>
  )
}

IndexPage.footer = true

export default IndexPage
