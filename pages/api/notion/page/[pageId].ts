import { NextApiRequest, NextApiResponse } from 'next'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { pageId } = req.query
  if (pageId) {
    const data = await notion.getPage(pageId as string)
    return res.status(200).json(data)
  }

  res.status(400).json({ message: 'No pageId query specified' })
}
