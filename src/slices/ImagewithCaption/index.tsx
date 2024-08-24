import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

import { Container } from '~/components/container'
import { getSizes } from '~/lib/utils'

import w from './css/_index.module.scss'
export type ImagewithCaptionProps =
  SliceComponentProps<Content.ImagewithCaptionSlice>

const ImagewithCaption = ({ slice }: ImagewithCaptionProps): JSX.Element => {
  return (
    <Container className={w['work-one-column']}>
      <Container className={w['media']}>
        <Image
          src={slice.primary.workimage.url || ''}
          alt={slice.primary.workimage.alt || 'alt'}
          width={slice.primary.workimage.dimensions?.width || 0}
          height={slice.primary.workimage.dimensions?.height || 0}
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
      </Container>
      {slice.primary.caption ? (
        <PrismicRichText field={slice.primary.caption} />
      ) : null}
    </Container>
  )
}

export default ImagewithCaption
