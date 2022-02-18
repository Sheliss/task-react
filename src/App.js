import './App.scss';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux'
import { task_list_success } from './store/actions/taskList'

function App() {
  const dispatch = useDispatch();
  const requestList = () => {
    const fetchList = async() => {
        const fetchList = await fetch('http://localhost:5000/tasks');

        const list = await fetchList.json();

        return list;
    }

    fetchList()
        .then(res => dispatch(task_list_success(res)))
}


  return (
    <div className="app">
      <div className="app__inner">
        <Header title={'Task Manager'} />
        <AddTask req={requestList}/>
        <TaskList req={requestList} />
      </div>
    </div>
  );
}

export default App;
