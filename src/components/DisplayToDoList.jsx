import React from 'react';

import AddToDo from '../components/AddToDo';

const DisplayToDoList = ({
  selectedTodo,
  ToggleTask,
  HandleDeleteTask,
  HandleAddTask,
  HandleClose,
}) => {
  if (!selectedTodo || !selectedTodo.tasks) {
    return null;
  }

  return (
    <div className="my-5">
      <AddToDo onSubmit={HandleAddTask} />
      <h1 className="text-center my-5">
        <span>Title: </span>
        {selectedTodo.title}
      </h1>

      <ul>
        {selectedTodo.tasks.length === 0 && <p>No Tasks</p>}
        {selectedTodo.tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border my-2"
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={(e) => ToggleTask(task.id, e.target.checked)}
                checked={task.completed}
                className="mr-2" // Add some margin to the right of the checkbox for spacing
              />
              {task.title}
            </label>
            <button
              className="btn btn-delete"
              onClick={(e) => HandleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayToDoList;
