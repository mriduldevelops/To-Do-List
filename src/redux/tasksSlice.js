import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedState));
      return updatedState;
    },
    toggleComplete: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
  }
});



export const { addTask, deleteTask, toggleComplete, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;