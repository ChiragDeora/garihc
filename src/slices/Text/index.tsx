import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

import { Container } from '~/components/container'

export type TextProps = SliceComponentProps<Content.TextSlice>

const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <Container className="work-text" style={{ marginBlockEnd: '1rem' }}>
      <PrismicRichText field={slice.primary.text} />
    </Container>
  )
}

export default Text
