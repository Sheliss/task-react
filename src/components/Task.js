import React from 'react'
import { useDispatch } from 'react-redux'
import { VscClose } from 'react-icons/vsc'
import { task_delete } from '../store/actions/taskList';

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const taskItem = task; 

  const deleteTask = (index) => {

    
    dispatch(task_delete(index))
    
    return;
  }

  return (
    <div className="task">
      <div className="task__col task__col--first">
        <div className="task__info">
            {taskItem.text}
        </div>
        <div className="task__date">
            {taskItem.day}
        </div>
      </div>
      <div className="task__col task__col--second">
          <button className="task__close" onClick={() => deleteTask(index)}>
            <VscClose />
          </button>
      </div>
    </div>
  )
}

export default Task