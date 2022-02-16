import React from 'react'

const Task = (task) => {
  const taskItem = task.task;  //store moment

  return (
    <div className="task">
        <div className="task__info">
            {taskItem.text}
        </div>
        <div className="task__date">
            {taskItem.day}
        </div>
    </div>
  )
}

export default Task