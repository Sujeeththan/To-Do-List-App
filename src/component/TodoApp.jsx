import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState("");
  const [todosList, setTodoslist] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") {
      alert("Enter a task...");
      return;
    }
    setTodoslist([...todosList, { id: Date.now(), text: task }]);
    setTask(""); 
  };

  const  deleteTodo = (id) => {
    setTodoslist(
      todosList.filter((item) => item.id !== id )
    )
  }

  return (
    <div className="container">
      <h2 className="head">My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id='btn' onClick={addTodo}>Add Task</button>
      <div>
        <ul className="todo-list">
          {todosList.map((item) => (
            <li className="todo-item" key={item.id}>
              {item.text}
              <span>{item.text}</span>
              <button onClick={(e) => {
                e.deleteTodo(item.id);
              }}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
