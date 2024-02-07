import React, { useState, useEffect } from 'react';

const AddToDo = () => {
  const [newItem, setNewItem] = useState('');
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  function handleAddTodo(e) {
    e.preventDefault();
    if (newItem === '') return;
    setTodo((currentTodo) => [
      ...currentTodo,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem('');
  }

  function HandleDelete(id) {
    console.log('click delete for ' + id);
    setTodo(todo.filter((item) => item.id !== id));
  }

  function ToggleTask(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  }

  return (
    <div>
      <h1>Add To Do here</h1>
      <form onSubmit={handleAddTodo}>
        <div>
          {' '}
          <label htmlFor="item">New task:</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <h1> To Do List </h1>
      {todo.length === 0 && 'No task on the list'}
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => ToggleTask(item.id, e.target.checked)}
              />
              {item.title}
            </label>
            <button onClick={() => HandleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToDo;
