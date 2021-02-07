import NotionPage from '#/components/NotionPage'
import useNotionPageQuery from '#/hooks/useNotionPageQuery'
import React from 'react'
import tw from 'twin.macro'

const rootPageId = '9b2e142bd33f4774960e015282ec07e6'

const IndexPage = () => {
  const { data, isLoading } = useNotionPageQuery({ pageId: rootPageId })
  return (
    <div css={[tw`container mx-auto px-4`]}>
      <NotionPage recordMap={data} loading={isLoading} />
    </div>
  )
}

export default IndexPage
