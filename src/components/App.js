import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [category, setCategory] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function categoryClick(event) {
    setSelectedCategory(event.target.textContent)
    setCategory(event.target.textContent)
  }

  function onTaskFormSubmit(event) {
    event.preventDefault()
    setTasks([{ text: event.target.text.value, category: event.target.category.value }, ...tasks])
  }

  function deleteTask(event) {
    const newTaskList = tasks.filter(task => {
      return task.text != event.target.previousSibling.textContent
    })
    setTasks(newTaskList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryClick={categoryClick} categories={CATEGORIES} selectedCategory={selectedCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList deleteTask={deleteTask} tasks={tasks} category={category} />
    </div>
  );
}

export default App;
