import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

import { Container } from '~/components/container'
import { getSizes } from '~/lib/utils'

import w from './css/_index.module.scss'

export type ImageTwoColumnProps =
  SliceComponentProps<Content.ImageTwoColumnSlice>

const ImageTwoColumn = ({ slice }: ImageTwoColumnProps): JSX.Element => {
  return (
    <Container className={w['work-two-column']}>
      <Container className={w['media']}>
        <Image
          src={slice.primary.image_one.url || ''}
          alt={slice.primary.image_one.alt || 'alt'}
          width={slice.primary.image_one.dimensions?.width || 0}
          height={slice.primary.image_one.dimensions?.height || 0}
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
        <Image
          src={slice.primary.image_two.url || ''}
          alt={slice.primary.image_two.alt || 'alt'}
          width={slice.primary.image_two.dimensions?.width || 0}
          height={slice.primary.image_two.dimensions?.height || 0}
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

export default ImageTwoColumn
