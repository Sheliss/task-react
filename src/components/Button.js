import React from 'react'

const Button = ({ buttonName, buttonMod, onClick }) => {
  return (
    <button className={`button button--${buttonMod}`} onClick={onClick}>
        {buttonName}
    </button>
  )
}

const emptyClick = () => {
  console.log('Empty onClick!');
}

Button.defaultProps = {
    buttonName: 'Button',
    buttonMod: 'button',
    onClick: emptyClick()
}

export default Button