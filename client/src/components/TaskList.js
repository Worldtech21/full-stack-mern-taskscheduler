import React from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.task} <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
