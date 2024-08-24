import React from 'react'
type ErrorPanelProps = {
  btnCallback: () => void
}
import e from './css/_index.module.scss'
export const ErrorPanel = ({ btnCallback }: ErrorPanelProps) => {
  return (
    <div className={e.errorContainer}>
      <div className={e.errorWrapper}>
        <h2>Error has occured. Refresh the page.</h2>
        <button className="button" onClick={btnCallback}>
          Try again
        </button>
      </div>
    </div>
  )
}
