import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [cat, setCat] = useState("Code")
  const [newTask, setNewTask] = useState("")

  const options = categories.map(category => {
    if (category === "All") return
    return <option key={category}>{category}</option>
  })

  function changeSelection(event) {
    setCat(event.target.value)
  }

  function changeText(event) {
    setNewTask(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input value={newTask} onChange={changeText} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={changeSelection} value={cat} name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
