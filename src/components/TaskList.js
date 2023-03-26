import React, { useState } from "react";
import Task from './Task'

function TaskList({ tasks, category, deleteTask }) {
  const tasksToDisplay = tasks.filter(item => {
    if (category === "All") return true
    return item.category === category
  }).map(task => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask} />
  })

  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}
//
export default TaskList;
