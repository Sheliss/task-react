import React, { useEffect } from 'react'
import Task from './Task'
import { VscClose } from 'react-icons/vsc'
import { useSelector, useDispatch } from 'react-redux';
import { task_list_request } from '../store/actions/taskList'

const TaskList = ({ req }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(task_list_request());
        req();
    }, [req, dispatch])

    
    const list = useSelector(state => state.taskList.data);
    const loading = useSelector(state => state.taskList.loading);
    
    const tasksList = (list) => {
        return (
            <div className="taskList__inner">
                {list.map((task, index) => (
                    <Task key={index} task={task} index={index} req={req}/>
                ))}
            </div>
        )
    }

  return (
    <div className="taskList">
        {loading ? (
            <div className="taskList__loading rotating">
                <VscClose />
            </div>
        ) : (
            tasksList(list)
        )}
    </div>
  )
}

export default TaskList