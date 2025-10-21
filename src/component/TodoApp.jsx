import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const initialTodos = [];
  for (let i = 0; i < 100; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' 
    });
  }

function addTask() {
  setTask(task);
  if(!task){
   alert("Enter the Task")
  }
}

function deleteTask() {
  setTodos(todos);
}
  return (
    <div className='container'>
      <h2 className='head'>My To-Do List</h2>
      <input type="text" placeholder='Enter a new task...'  />
      <button onClick={addTask}>Add Task</button>
      <div > 
        <ul className='todo-list'>
           <li class="todo-item">
              <span ></span>
          </li> 
        </ul>
        </div>
    </div>
  )
}

export default TodoApp