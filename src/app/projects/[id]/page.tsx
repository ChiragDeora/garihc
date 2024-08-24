import ProjectPageContent from '~/components/common/ProjectPageContent'
import { createClient } from '~/prismicio'
type ProductDetailsProps = {
  params: { id: string }
}
const Page = async ({ params }: ProductDetailsProps) => {
  const client = createClient()
  const data = await client.getByUID('work', params.id)
  const work = data.data
  return <ProjectPageContent {...work} />
}
export default Page
