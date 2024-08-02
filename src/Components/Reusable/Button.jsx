import React from 'react'
import "./button.module.css"

const Button = ({ buttonText, buttonBg }) => {
  return (
      <button style={{background:buttonBg}}>{buttonText}</button>
  )
}

export default Button