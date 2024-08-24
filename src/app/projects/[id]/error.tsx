'use client'

import React, { useEffect } from 'react'

import { ErrorPanel } from '~/components/common/Error'
import { Modal } from '~/components/common/Modal'

const ErrorFnc = ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Modal>
      <ErrorPanel btnCallback={() => reset()} />
    </Modal>
  )
}

export default ErrorFnc
