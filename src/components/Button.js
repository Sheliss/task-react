import React from 'react'

const Button = ({ buttonName, buttonMod }) => {
  return (
    <button className={`button button--${buttonMod}`}>
        {buttonName}
    </button>
  )
}

Button.defaultProps = {
    buttonName: 'Button',
    buttonMod: 'button'
}

export default Button