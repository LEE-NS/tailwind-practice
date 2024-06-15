import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { TaskContext } from "../context/TaskContext";

const Tasks = ({ each }) => {
  const { task, setTask } = useContext(TaskContext);

  const updateTask = (id) => {
    const newTasks = task.map((eachTask) =>
      eachTask.id === id ? { ...eachTask, isDone: !eachTask.isDone } : eachTask
    );
    setTask(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = task.filter((eachTask) => eachTask.id !== id);
    setTask(newTasks);
  };

  return (
    <div>
      <h3>{each.title}</h3>
      <p>{each.job}</p>
      <button onClick={() => updateTask(each.id)}>
        {each.isDone ? <DoneIcon /> : <DonutLargeIcon />}
      </button>
      <button onClick={() => deleteTask(each.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Tasks;
