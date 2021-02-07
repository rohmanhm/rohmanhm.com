import ky from 'ky-universal'
import { useQuery } from 'react-query'

type Config = { pageId: string }
const useNotionPageQuery = ({ pageId }: Config) => {
  const query = useQuery(
    ['page', pageId],
    async () => {
      const data = await ky(`/api/notion/page/${pageId}`)
      return data.json()
    },
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(pageId) || false,
    }
  )

  return query
}

export default useNotionPageQuery
