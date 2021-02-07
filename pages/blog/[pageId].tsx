import NavHeader from '#/components/NavHeader'
import NotionPage from '#/components/NotionPage'
import useNotionPageQuery from '#/hooks/useNotionPageQuery'
import { useRouter } from 'next/router'
import { getPageTitle } from 'notion-utils'
import React from 'react'
import tw from 'twin.macro'

const BlogPostPage = () => {
  const router = useRouter()
  const { data, isLoading } = useNotionPageQuery({
    pageId: router.query.pageId as string,
  })

  const title = data ? getPageTitle(data) : ''
  return (
    <div css={[tw`container mx-auto px-4 pb-4`]}>
      <NavHeader />

      <div css={[tw`py-6`]}>
        <h2 css={[tw`text-3xl`]}>{title}</h2>
      </div>
      <NotionPage recordMap={data} loading={isLoading} />
    </div>
  )
}

BlogPostPage.footer = true

export default BlogPostPage
