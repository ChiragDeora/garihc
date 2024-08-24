import React from 'react'

import { createClient } from '~/prismicio'

import WorkComponent from '../common/WorkComponent'
import { Container } from '../container'

export default async function Exp() {
  const client = createClient()
  const data = await client.getByType('experience')
  const exp = data.results[0]?.data.slices

  const reshapedExp =
    exp?.map((item, index) => ({
      id: index + 1,
      title: item.primary.work || '',
      year: `${item.primary.year} - ${item.primary.tillyear}`
    })) || []
  return (
    <Container>
      <p>Work Experience</p>
      <Container>
        <WorkComponent data={reshapedExp} />
      </Container>
    </Container>
  )
}
