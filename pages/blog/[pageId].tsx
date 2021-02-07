import NotionPage from '#/components/NotionPage'
import useNotionPageQuery from '#/hooks/useNotionPageQuery'
import { useRouter } from 'next/router'
import React from 'react'
import tw from 'twin.macro'

const BlogPostPage = () => {
  const router = useRouter()
  const { data, isLoading } = useNotionPageQuery({
    pageId: router.query.pageId as string,
  })

  return (
    <div css={[tw`container mx-auto px-4 pb-4`]}>
      <NotionPage recordMap={data} loading={isLoading} />
    </div>
  )
}

export default BlogPostPage
