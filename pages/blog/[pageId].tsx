import Container from '@/components/Container/Container'
import HeaderNav from '@/components/Header/Header.Nav'
import NotionPage from '@/components/NotionPage/NotionPage'
import SkeletonBlogPost from '@/components/Skeleton/Skeleton.BlogPost'
import { BLOG_PAGE_ID, DEFAULT_REVALIDATE } from '@/configs/constants'
import { getPage } from '@/libs/notion'
import { GetStaticPropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getPageContentBlockIds } from 'notion-utils'

const BlogPostPage: NextPage<{ recordMap: any }> = ({ recordMap }) => {
  const { isFallback } = useRouter()

  return (
    <>
      <HeaderNav />

      <Container flexDirection="column" p={4}>
        {isFallback && <SkeletonBlogPost />}

        <NotionPage recordMap={recordMap} />
      </Container>
    </>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx?.params?.pageId as string
  console.log('building page: ', id)
  const recordMap = await getPage(id)
  return { props: { recordMap }, revalidate: DEFAULT_REVALIDATE }
}

export async function getStaticPaths() {
  const recordMap = await getPage(BLOG_PAGE_ID)
  const paths = getPageContentBlockIds(recordMap)?.map((id) => ({
    params: { pageId: id },
  }))
  return { paths, fallback: true }
}

export default BlogPostPage
