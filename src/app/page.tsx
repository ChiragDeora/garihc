import { PrismicRichText } from '@prismicio/react'
import React from 'react'

import Available from '~/components/Available'
import { Container } from '~/components/container'
import Exp from '~/components/Exp'
import Work from '~/components/Work'
import { createClient } from '~/prismicio'

export default async function HomePage() {
  const client = createClient()
  const data = await client.getByType('home')
  const home = data.results[0]?.data

  return (
    <>
      <Container
        style={{ display: 'flex', flexDirection: 'column', gap: '10pt' }}
      >
        <PrismicRichText field={home?.about} />
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
        <Available ava={home!.available} />
        <Work />
        <Exp />
      </Container>
    </>
  )
}
