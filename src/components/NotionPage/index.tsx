import { Box, Heading, useColorMode } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { FC } from 'react'
import { Collection, NotionRenderer } from 'react-notion-x'
import NotionPageLink from './NotionPage.Link'

const Code = dynamic(
  // @ts-expect-error idk
  () => import('react-notion-x').then((notion) => notion.Code)
)

type Props = {
  recordMap: ExtendedRecordMap | undefined
  loading?: boolean
  autoTitle?: boolean
}
const NotionPage: FC<Props> = ({
  recordMap,
  loading = false,
  autoTitle = true,
}) => {
  const { colorMode } = useColorMode()

  if (loading) {
    return <Box>Loading ...</Box>
  }

  if (!recordMap) {
    return <div>Please reload the page.</div>
  }

  const title = getPageTitle(recordMap) || 'Untitled'
  return (
    <>
      {autoTitle && (
        <Head>
          <title>{title} - RohmanHM</title>
        </Head>
      )}
      <NotionRenderer
        recordMap={recordMap}
        components={{
          collection: Collection,
          collectionRow: () => {
            return (
              <Box mb={5}>
                <Heading as="h1">{title}</Heading>
              </Box>
            )
          },
          pageLink: (props: any) => (
            <NotionPageLink recordMap={recordMap} {...props} />
          ),
          code: Code,
        }}
        fullPage={false}
        darkMode={colorMode === 'dark'}
      />
    </>
  )
}

export default NotionPage
