import React from 'react'

const Button = ({ buttonName, buttonMod, onClick }) => {
  return (
    <button className={`button button--${buttonMod}`} onClick={onClick}>
        {buttonName}
    </button>
  )
}


Button.defaultProps = {
    buttonName: 'Button',
    buttonMod: 'button'
}

export default Button