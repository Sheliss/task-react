import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { change_task_show } from '../store/actions/addTask'


const Header = ({ title }) => {
  const dispatch = useDispatch();
  const menuShow = useSelector(state => state.addTask.menuShow);

  const menuSwitch = () => {
    dispatch(change_task_show());
  }

  return (
    <header className='header'>
        <h1>
            {title}
        </h1>
        <Button buttonName={ menuShow ? 'Hide' : 'Add Task'} buttonMod={ menuShow ? 'red' : 'green' } onClick={menuSwitch}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header