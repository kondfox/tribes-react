import React from 'react'
import './Button.scss'

const Button = ({ label, isActive, onClick }) => {
  return (
    <button disabled={!isActive} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
