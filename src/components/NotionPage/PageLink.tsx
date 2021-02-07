import Link, { LinkProps } from 'next/link'
import { ExtendedRecordMap } from 'notion-types'
import { getCanonicalPageId, parsePageId } from 'notion-utils'
import React, { FC } from 'react'

export type PageLinkProps = LinkProps & {
  recordMap?: ExtendedRecordMap
}
const PageLink: FC<PageLinkProps> = ({
  children,
  as,
  href,
  recordMap,
  ...props
}) => {
  const pageId = parsePageId(href as string, { uuid: true })
  console.log(
    '🚀 ~ file: PageLink.tsx ~ line 16 ~ recordMap',
    recordMap,
    pageId,
    recordMap?.block[pageId]
  )
  const baba = recordMap ? getCanonicalPageId(pageId, recordMap) : ''
  return (
    <Link
      href={`/blog/${baba}`}
      // @ts-expect-error because it shouldn't
      as={as}
      {...props}
    >
      <a>{children}</a>
    </Link>
  )
}

PageLink.displayName = 'NotionPageLink'

export default PageLink
