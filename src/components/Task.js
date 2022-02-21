import React from 'react'
import { VscClose } from 'react-icons/vsc'
import { useDispatch } from 'react-redux';
import { task_delete } from '../store/actions/taskList';

const Task = ({ task}) => {
  const dispatch = useDispatch();
  const taskItem = task; 

  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      if(res.status === 200) {
        dispatch(task_delete(id));
      } else {
        throw new Error(`Delete error, code ${res.status}`)
      }
    })
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
          <button className="task__close" onClick={() => deleteTask(taskItem.id)}>
            <VscClose />
          </button>
      </div>
    </div>
  )
}

export default Task