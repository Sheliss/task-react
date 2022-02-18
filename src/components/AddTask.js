import React, { useState } from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const AddTask = ({ req }) => {
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

    updateDB(data);

    setText('');
    setDay('');

    return; 
  }

  const updateDB = async(data) => {
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',

      },
      body: JSON.stringify(data),
    }).then((res) => {
      if(res.status === 201) {
        req();
      } else {
        throw new Error(`Task adding error, code ${res.status}`)
      }
    })

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