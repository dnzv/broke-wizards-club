import React from 'react'

const Card = ({ children, border }) => {
  let className = 'px-6 pt-4 pb-2 shadow font-normal'
  if (border) {
    className += ' border-solid border-t-4 border-purple-600'
  }
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Card