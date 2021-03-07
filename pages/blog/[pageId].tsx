import useNotionPageQuery from '@/hooks/useNotionPageQuery'
import Container from 'components/Container/Container'
import HeaderNav from 'components/Header/Header.Nav'
import NotionPage from 'components/NotionPage/NotionPage'
import { useRouter } from 'next/router'

const BlogPostPage = () => {
  const router = useRouter()
  const { data, isLoading } = useNotionPageQuery({
    pageId: router.query.pageId as string,
  })

  // const title = data ? getPageTitle(data) : ''
  return (
    <>
      <HeaderNav />

      <Container flexDirection="column" p={4}>
        <NotionPage recordMap={data} loading={isLoading} />
      </Container>
    </>
  )
}

BlogPostPage.footer = true

export default BlogPostPage
