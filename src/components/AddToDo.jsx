import { useState } from 'react';

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
      <form onSubmit={handleAddTodo} className="">
        <div>
          {' '}
          <input
            type="text"
            id="item"
            className="textbox"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add New Task here"
          />
        </div>
        <button type="submit" className="btn w-full">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
