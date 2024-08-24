import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `EXs`.
 */
export type EXsProps = SliceComponentProps<Content.EXsSlice>

/**
 * Component for "EXs" Slices.
 */
const EXs = ({ slice }: EXsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for e_xs (variation: {slice.variation}) Slices
    </section>
  )
}

export default EXs
