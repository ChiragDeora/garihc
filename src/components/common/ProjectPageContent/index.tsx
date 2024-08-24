import { PrismicRichText, SliceZone } from '@prismicio/react'
import Image from 'next/image'

import { WorkDocumentData } from '~/../prismicio-types'
import { Container } from '~/components/container'
import { getSizes } from '~/lib/utils'
import { components } from '~/slices'

import p from './css/_index.module.scss'
export default function ProjectPageContent(props: WorkDocumentData) {
  return (
    <Container className={p['project-container']}>
      <Image
        src={props.featuredimage.url || 'https://placehold.co/1920x1080.png'}
        alt={props.featuredimage.alt || 'alt'}
        width={props.featuredimage.dimensions?.width || '1920'}
        height={props.featuredimage.dimensions?.height || '1080'}
        className={p['featured-image']}
        sizes={getSizes([
          {
            breakpoint: '1500px',
            width: '1000px'
          },
          {
            breakpoint: '1000px',
            width: '700px'
          },
          {
            breakpoint: '800px',
            width: '600px'
          },
          {
            breakpoint: '600px',
            width: '500px'
          }
        ])}
      />
      <Container className={p['header']}>
        <h1>{props.work_title}</h1>
        <p>{props.work_year}</p>
      </Container>
      <Container className={p.content}>
        <Container className={p['work-content']}>
          <p>{props.meta_description}</p>
          <PrismicRichText field={props.services_provided} />
        </Container>
        <SliceZone slices={props.slices} components={components} />
      </Container>
    </Container>
  )
}
