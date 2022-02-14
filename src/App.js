import './App.scss';
import AddTask from './components/AddTask';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <div className="app__inner">
        <Header title={'Task Manager'} buttonName={'Add New'} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
