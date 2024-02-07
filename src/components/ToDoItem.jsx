import React from 'react';

const ToDoItem = ({ id, title, completed, ToggleTask, HandleDelete }) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => ToggleTask(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => HandleDelete(id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
