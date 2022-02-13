import './App.scss';
import AddTask from './components/AddTask';
import Header from './components/Header';

const title = 'Task Manager';
const buttonName = 'Add New';


function App() {
  return (
    <div className="app">
      <div className="app__inner">
        <Header {...{title, buttonName}} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
