import Container from '@/components/Container/Container'
import HeaderNav from '@/components/Header/Header.Nav'
import NotionPage from '@/components/NotionPage/NotionPage'
import { BLOG_PAGE_ID, DEFAULT_REVALIDATE } from '@/configs/constants'
import { getPage } from '@/libs/notion'
import { NextPage } from 'next'
import Head from 'next/head'

const IndexPage: NextPage<{ recordMap: any }> = ({ recordMap }) => {
  return (
    <>
      <HeaderNav />
      <Head>
        <title>Rohman HM</title>
      </Head>
      <Container id="home-page" position="relative">
        <NotionPage autoTitle={false} recordMap={recordMap} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const id = BLOG_PAGE_ID
  console.log('building page: ', id)
  const recordMap = await getPage(id)
  return { props: { recordMap }, revalidate: DEFAULT_REVALIDATE }
}

export default IndexPage
