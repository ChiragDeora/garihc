import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import icon from '~/public/icon.svg'
import logo from '~/public/logo.svg'

import { Container } from '../container'
import n from './css/_index.module.scss'
export default function Navigation() {
  return (
    <Container className={n.navigation}>
      <Link href={'/'}>
        <Image src={logo} alt={'logo'} />
      </Link>
      <Image src={icon} alt={'logo'} />
    </Container>
  )
}
