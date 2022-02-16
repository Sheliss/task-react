import React, { useEffect } from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux';
import { task_list_request, task_list_success } from '../store/actions/taskList'

const TaskList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(task_list_request());
        const fetchList = async() => {
            const fetchList = await fetch('http://localhost:5000/tasks');

            const list = await fetchList.json();

            return list;
        }

        fetchList()
            .then(res => dispatch(task_list_success(res)))

    }, [dispatch])

    const list = useSelector(state => state.taskList.data);
    const loading = useSelector(state => state.taskList.loading);
    
    const tasksList = (list) => {
        return (
            <div className="taskList__item">
                {list.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
        )
    }

  return (
    <div className="taskList">
        {loading ? (
            <div className="taskList__loading">f</div>
        ) : (
            tasksList(list)
        )}
    </div>
  )
}

export default TaskList