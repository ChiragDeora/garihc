import Link from 'next/link'
import React from 'react'

import { Container } from '~/components/container'

import w from './css/_index.module.scss'

type TWork = {
  id: number
  title: string
  workURL?: string
  year: string
}

type TRecentWork = {
  data: TWork[]
}

export default function WorkComponent({ data }: TRecentWork) {
  return (
    <Container>
      {data.map((w, idx) => {
        return (
          <WorkLinkComponent
            key={idx}
            id={w.id}
            title={w.title}
            workURL={w.workURL}
            year={w.year}
          />
        )
      })}
    </Container>
  )
}

function WorkLinkComponent(props: TWork) {
  const { title, workURL, year } = props
  return (
    <Container className={w.workContainer}>
      {workURL ? (
        <Link href={workURL} className={w.Link}>
          <p className={w.workTitle}>{title}</p>
          <p className={w.workYear}>{year}</p>
        </Link>
      ) : (
        <span className={w.Link}>
          <p className={w.workTitle}>{title}</p>
          <p className={w.workYear}>{year}</p>
        </span>
      )}
    </Container>
  )
}
