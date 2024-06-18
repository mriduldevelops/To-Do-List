import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='header'>
      <h1>To-Do List</h1>
      </div>
      <div className='container'>
      <TaskInput />
      <h2>All Tasks</h2>
      <TaskList />
      </div>
    </div>
  );
};

export default App;
