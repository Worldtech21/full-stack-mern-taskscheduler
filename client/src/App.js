import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const API_URL = "http://localhost:5000/tasks"; // Update this when deployed

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
