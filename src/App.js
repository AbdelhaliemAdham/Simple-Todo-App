import "./App.css";
import React, { useState } from "react";
import { useRef } from "react";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import Input from "./components/Input";

const getTasks = JSON.parse(localStorage.getItem("tasks"));
const style = {
  background:
    "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function App() {
  const [tasks, setTasks] = useState(getTasks || []);
  const inputRef = useRef();
  function handleAddTask() {
    const task = inputRef.current.value;
    const newTask = {
      task,
      isCompleted: false,
    };
    if (task !== "") {
      const getStoredTasks = localStorage.getItem("tasks");
      if (getStoredTasks) {
        const parsedTasks = JSON.parse(getStoredTasks);
        const updatedTasks = [...parsedTasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      } else {
        localStorage.setItem("tasks", JSON.stringify([newTask]));
      }
      setTasks([...tasks, newTask]);
      inputRef.current.value = "";
    }
  }
  function checkTask(taskIndex, value) {
    const newTask = [...tasks];
    newTask[taskIndex].isCompleted = value;
    setTasks(newTask);
  }
  function handleDeleteTask(taskIndex) {
    const filteredTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks([...filteredTasks]);
  }
  return (
    <div className="flex justify-center items-center h-screen" style={style}>
      <div className="border-2 border-gray-700 py-5 px-10 bg-primary rounded-md">
        <h1 className="text-lg font-bold text-center mb-5 text-white">
          Todo List
        </h1>
        <Tasks
          tasks={tasks}
          isEmpty={tasks.length === 0}
          clearTask={handleDeleteTask}
          checkTask={checkTask}
        />
        <div className="flex justify-between items-center">
          <Input inputRef={inputRef} placeholder="Enter Your Task" />
          <Button handleAddTask={handleAddTask}>Add Task</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
