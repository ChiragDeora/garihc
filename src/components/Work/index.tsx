import React from 'react'
import { createClient } from '~/prismicio'
import WorkComponent from '../common/WorkComponent'
import { Container } from '../container'

export default async function Work() {
  const client = createClient()
  const data = await client.getAllByType('work')
  const reshapedWork =
    data?.map((item, index) => ({
      id: index + 1,
      title: item.data.work_title || '',
      year: `${item.data.work_year}`,
      workURL: `/projects/${index + 1}`
    })) || []
  return (
    <Container>
      <p>Recent Work</p>
      <Container>
        <WorkComponent data={reshapedWork} />
      </Container>
    </Container>
  )
}
