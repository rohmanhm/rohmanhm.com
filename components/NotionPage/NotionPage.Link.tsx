import Link, { LinkProps } from 'next/link'
import { ExtendedRecordMap } from 'notion-types'
import { getCanonicalPageId, parsePageId } from 'notion-utils'
import { FC } from 'react'

export type PageLinkProps = LinkProps & {
  recordMap?: ExtendedRecordMap
}
const NotionPageLink: FC<PageLinkProps> = ({
  children,
  as,
  href,
  recordMap,
  ...props
}) => {
  const pageId = parsePageId(href as string, { uuid: true })
  const canonical = recordMap ? getCanonicalPageId(pageId, recordMap) : ''
  return (
    <Link href={`/blog/${canonical}`} as={as} {...props}>
      <a>{children}</a>
    </Link>
  )
}

NotionPageLink.displayName = 'NotionPageLink'

export default NotionPageLink
