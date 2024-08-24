'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

import m from './css/_index.module.scss'
type ModalProps = {
  children: React.ReactNode
}
export const Modal = ({ children }: ModalProps) => {
  const router = useRouter()
  const handleOnClose = () => router.back()
  return (
    <div
      role="dialog"
      className={m.modal}
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div
        role="button"
        className={m.closeButton}
        onClick={handleOnClose}
      ></div>

      <div className={m['modal-wrapper']}>
        <div className="m-3">{children}</div>
      </div>
    </div>
  )
}
