import NavHeader from '#/components/NavHeader'
import NotionPage from '#/components/NotionPage'
import useNotionPageQuery from '#/hooks/useNotionPageQuery'
import Head from 'next/head'
import React from 'react'
import tw from 'twin.macro'

const rootPageId = '9b2e142bd33f4774960e015282ec07e6'

const IndexPage = () => {
  const { data, isLoading } = useNotionPageQuery({ pageId: rootPageId })
  return (
    <div className="home-page" css={[tw`container mx-auto px-4`]}>
      <Head>
        <title>Rohman HM</title>
      </Head>

      <NavHeader />
      <NotionPage autoTitle={false} recordMap={data} loading={isLoading} />
    </div>
  )
}

IndexPage.footer = true

export default IndexPage
