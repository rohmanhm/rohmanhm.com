import { ExtendedRecordMap } from 'notion-types'
import React, { FC } from 'react'
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x'
import PageLink from './PageLink'

type Props = {
  recordMap: ExtendedRecordMap | undefined
  loading?: boolean
}
const NotionPage: FC<Props> = ({ recordMap, loading = false }) => {
  if (loading) {
    return <div>Loading ...</div>
  }

  if (!recordMap) {
    return <div>Please reload the page.</div>
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        collection: Collection,
        collectionRow: CollectionRow,
        pageLink: (props: any) => <PageLink recordMap={recordMap} {...props} />,
      }}
    />
  )
}

export default NotionPage
