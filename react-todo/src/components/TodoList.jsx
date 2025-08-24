import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <form onSubmit={addTodo} className="add-todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-button">Add Todo</button>
      </form>

      <div className="todos-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span
              className="todo-text"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
              aria-label={`Delete ${todo.text}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="todo-stats">
        <p>Total todos: {todos.length}</p>
        <p>Completed: {todos.filter(todo => todo.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;
