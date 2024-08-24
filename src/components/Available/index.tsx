'use client'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Container } from '../container'
import a from './css/_index.module.scss'
export default function Available({ ava }: { ava: boolean }) {
  const [month, setMonth] = useState<string>()
  useEffect(() => {
    setMonth(new Date().toLocaleString('default', { month: 'long' }))
  }, [])
  return (
    <Container className={a.availableContainer}>
      <Container className={clsx(a.email, 'button')}>
        <Link href="mailto:hey@gr--ri-hc.dev">Email for work.</Link>
      </Container>
      <Container className={a.availableLabel}>
        <div
          className={clsx(
            a['availbility-signal'],
            ava ? a.available : a.unavailable
          )}
        />
        <p>
          {ava ? 'Available ' : 'Unavailable '}for {month}
        </p>
      </Container>
    </Container>
  )
}
