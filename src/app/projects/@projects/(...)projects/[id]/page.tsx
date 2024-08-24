import React from 'react'

import { Modal } from '~/components/common/Modal'
type ProductDetailsProps = {
  params: { id: string }
}
const Page = async ({ params }: ProductDetailsProps) => {
  return <Modal>Intercepted{params.id}</Modal>
}
export default Page
