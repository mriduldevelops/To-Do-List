import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* header section */}
      <div className="header">
        <h1>To-Do List</h1>
      </div>

      {/* container for task input and task list */}
      <div className="container">
        {/* component for adding a new task */}
        <TaskInput />

        <h2>All Tasks</h2>

        {/* component for displaying the list of tasks */}
        <TaskList />
      </div>
    </div>
  );
};

export default App;
