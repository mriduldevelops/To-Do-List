import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleComplete, editTask } from "../redux/tasksSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: "",
    text: "",
    completed: false,
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleEdit = (task) => {
    setOpen(true);
    setCurrentTask({
      id: task.id,
      text: task.text,
      completed: task.completed,
    });
  };

  const handleClose = () => {
    dispatch(editTask(currentTask));
    setOpen(false);
  };

  const handleChange = (e) => {
    setCurrentTask({ ...currentTask, text: e.target.value });
  };

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <div className="task__btn">
              <i
                className={`fa-regular ${
                  task.completed ? "fa-square-check completeBtn" : "fa-square"
                }`}
                onClick={() => handleToggleComplete(task.id)}
              ></i>

              <i
                className="fa-regular fa-pen-to-square editBtn"
                onClick={() => handleEdit(task)}
              ></i>
              <i
                className="fa-solid fa-trash deleteBtn"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Edit Task</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <span>Edit the task text:</span>
                  <input
                    type="text"
                    value={currentTask.text}
                    onChange={handleChange}
                    style={{
                      border: "1px solid rgb(54, 54, 54)",
                      width: "520px",
                      margin: "5px 0",
                    }}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} autoFocus>
                  Edit
                </Button>
              </DialogActions>
            </Dialog>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
