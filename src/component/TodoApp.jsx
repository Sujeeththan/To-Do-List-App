import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todosList, setTodoslist] = useState([]);

  const addTodo = (task) => {
    if (task.trim() === "") {
      alert("Enter a task...");
    }
    const isDuplicate = todosList.some(
      (value) => value.trim().toLowerCase() == task.trim().toLowerCase()
    ); // true or false
    if (isDuplicate) {
      alert("Task already exist");
      return;
    }

    setTodoslist([...todosList, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodoslist(todosList.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2 className="head">My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id="btn" onClick={() => addTodo(task)}>
        Add Task
      </button>
      <div>
        {todosList.length > 0 && (
          <ul className="todo-list">
            {todosList.map((item) => (
              <li className="todo-item" key={item.id}>
                <span>{item.text}</span>
                <button
                  onClick={() => {
                    deleteTodo(item.id);
                  }}
                >
                  Del
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
