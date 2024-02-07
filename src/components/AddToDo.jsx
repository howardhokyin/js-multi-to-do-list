import React, { useState } from 'react';

const AddToDo = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');

  function handleAddTodo(e) {
    e.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
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
    </div>
  );
};

export default AddToDo;
