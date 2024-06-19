import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// configuring the store
const store = configureStore({
  reducer: {
    tasks: tasksReducer 
  }
});

export default store;
