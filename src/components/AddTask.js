import React, { useState } from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { task_list_update } from '../store/actions/taskList'

const AddTask = () => {
  const dispatch = useDispatch();
  const menuShow = useSelector(state => state.addTask.menuShow);

  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const updateList = (e, data) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task')
      return
    }

    if (!day) {
      alert('Please add a date')
      return
    }

    dispatch(task_list_update(data));

    setText('');
    setDay('');

    return; 
  }

  return (
    <div className={`addTask addTask--${menuShow ? 'show' : 'hide'}`}>
        <form className="addTask__form">
            <label htmlFor="taskName" className="addTask__label">
                Task:
            </label>
            <input id="taskName" type="text" value={text} className="addTask__input" onChange={(e) => setText(e.target.value)} />
            <label htmlFor="taskDate" className="addTask__label">
                Day & Time:
            </label>
            <input id="taskDate" type="text" value={day} className="addTask__input" onChange={(e) => setDay(e.target.value)} />
            <Button buttonName={'Add Task'} buttonMod={'addTask'} onClick={(e) => updateList(e, {text, day})} />
        </form>
    </div>
  )
}

export default AddTask