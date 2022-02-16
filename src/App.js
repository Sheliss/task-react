import './App.scss';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="app">
      <div className="app__inner">
        <Header title={'Task Manager'} />
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
