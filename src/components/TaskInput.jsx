import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const TaskInput = () => {
  // local state for the input value and the Snackbar visibility
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the input is not empty
    if (task.trim()) {
      // dispatch the addTask action with the input value
      dispatch(addTask(task));
      setTask("");
    }
  };

  // function to handle Snackbar open
  const handleClick = () => {
    setOpen(true);
  };

  // function to handle Snackbar close
  const handleClose = (event, reason) => {
    // prevent the Snackbar from closing on clickaway
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {/* form for adding a new task */}
      <form onSubmit={handleSubmit} className="input__container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" onClick={handleClick} className="add__btn">
          Add Task
        </button>
      </form>
      
      {/* snackbar for showing the task added message */}
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task Added Successfully!!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TaskInput;
