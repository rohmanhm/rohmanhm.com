import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import React, { FC } from 'react'
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x'
import tw from 'twin.macro'
import PageLink from './PageLink'

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
  if (loading) {
    return (
      <div css={[tw`flex h-screen items-center justify-center`]}>
        Loading ...
      </div>
    )
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
          collectionRow: CollectionRow,
          pageLink: (props: any) => (
            <PageLink recordMap={recordMap} {...props} />
          ),
          code: Code,
        }}
        fullPage={false}
        darkMode={false}
      />
    </>
  )
}

export default NotionPage
