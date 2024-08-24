import { SliceZone } from '@prismicio/react'
import React from 'react'

import { Container } from '~/components/container'
import { createClient } from '~/prismicio'
import { components } from '~/slices'
export default async function TestPage() {
  const client = createClient()
  const data = await client.getByType('work')
  const work = data.results[0]?.data
  return (
    <Container>
      <h1>TEST PAGE</h1>
      <SliceZone components={components} slices={work?.slices} />
    </Container>
  )
}
