import { createSlice } from "@reduxjs/toolkit";

// initial state for the tasks slice loaded from localStorage
const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

// create a slice for tasks with createSlice
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // reducer for adding a new task
    addTask: (state, action) => {
      // add task to state
      state.push({ id: Date.now(), text: action.payload, completed: false });
      // update localStorage
      localStorage.setItem("tasks", JSON.stringify(state));
    },

    // reducer to delete a task
    deleteTask: (state, action) => {
      // filter out the task with the given id from the state array
      const updatedState = state.filter((task) => task.id !== action.payload);
      // update localStorage
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },

    // reducer for toggling task completion status
    toggleComplete: (state, action) => {
      // find task by id
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        // toggle completed status
        task.completed = !task.completed;
        // update localStorage
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },

    // reducer for editing task text
    editTask: (state, action) => {
      // // find task by id
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        // update task text
        task.text = action.payload.text;
        // update localStorage
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
  },
});

// export action creators for tasks
export const { addTask, deleteTask, toggleComplete, editTask } =
  tasksSlice.actions;

// export tasks reducer
export default tasksSlice.reducer;
