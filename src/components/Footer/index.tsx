import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { createClient } from '~/prismicio'
import logo from '~/public/logo.svg'

import Available from '../Available'
import { Container } from '../container'
import f from './css/_index.module.scss'
export default async function Footer() {
  const client = createClient()
  const data = await client.getByType('home')
  const home = data.results[0]?.data
  return (
    <Container className={f.footer}>
      <Container className={f.footerWrapper}>
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
        <Available ava={home!.available} />
        <Link href={'/'} className={f.logo}>
          <Image src={logo} alt={'logo'} />
        </Link>
      </Container>
    </Container>
  )
}
