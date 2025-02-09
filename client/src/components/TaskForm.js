import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

const TaskForm = ({ setTasks }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(API_URL, { task });
    setTasks((prev) => [...prev, res.data]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
