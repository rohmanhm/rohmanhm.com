import HeaderNav from '@/components/Header/Header.Nav'
import NotionPage from '@/components/NotionPage'
import useNotionPageQuery from '@/hooks/useNotionPageQuery'
import { useRouter } from 'next/router'
import { getPageTitle } from 'notion-utils'

const BlogPostPage = () => {
  const router = useRouter()
  const { data, isLoading } = useNotionPageQuery({
    pageId: router.query.pageId as string,
  })

  const title = data ? getPageTitle(data) : ''
  return (
    <div>
      <HeaderNav />

      <div>
        <h2>{title}</h2>
      </div>
      <NotionPage recordMap={data} loading={isLoading} />
    </div>
  )
}

BlogPostPage.footer = true

export default BlogPostPage
