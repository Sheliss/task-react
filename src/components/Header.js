import React from 'react'
import Button from './Button'

const Header = ({ title, buttonName }) => {
  return (
    <header className='header'>
        <h1>
            {title}
        </h1>
        <Button buttonName={buttonName} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header