import React, { useState } from 'react'

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

function addTask() {
  setTask(task);
  alert("Enter the Task")
}

  return (
    <div className='container'>
      <h2 className='head'>My To-Do List</h2>
      <input type="text" placeholder='Enter a new task...'  />
      <button onClick={addTask}>Add Task</button>
      <div></div>
    </div>
  )
}

export default TodoApp