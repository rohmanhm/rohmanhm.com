export const BLOG_PAGE_ID = process.env.NEXT_PUBLIC_BLOG_NOTION_ID as string
export const IS_PROD = process.env.NODE_ENV === 'production'
export const DEFAULT_REVALIDATE = IS_PROD ? 10 : false
