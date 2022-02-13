import React from 'react'
import Button from './Button'

const buttonName = 'Add Task';
const buttonMod = 'addTask';

const AddTask = () => {
  return (
    <div className="addTask">
        <form action="" className="addTask__form">
            <label htmlFor="taskName" className="addTask__label">
                Task:
            </label>
            <input id="taskName" type="text" className="addTask__input" />
            <label htmlFor="taskDate" className="addTask__label">
                Day & Time:
            </label>
            <input id="taskDate" type="text" className="addTask__input" />
            <Button {...{buttonName, buttonMod}}/>
        </form>
    </div>
  )
}

export default AddTask