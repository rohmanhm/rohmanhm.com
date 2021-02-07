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
  const canonical = recordMap ? getCanonicalPageId(pageId, recordMap) : ''
  return (
    <Link
      href={`/blog/${canonical}`}
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
