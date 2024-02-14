import React, { useState } from 'react';
import AddToDo from '../components/AddToDo';

const DisplayToDoList = ({
  selectedTodo,
  ToggleTask,
  HandleDeleteTask,
  HandleAddTask,
  onSubmitEdit,
}) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  function handleEdit(taskId, title) {
    setEditTaskId(taskId);
    setEditedTask(title);
  }

  function handleSubmit(e, listID, taskID) {
    e.preventDefault();
    onSubmitEdit(listID, taskID, editedTask);
    setEditTaskId(null); // Exit edit mode
    setEditedTask(''); // Reset edited task
  }

  function cancelEdit() {
    setEditTaskId(null); // Exit edit mode
    setEditedTask(''); // Reset edited task
  }

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
            {editTaskId === task.id ? (
              <form onSubmit={(e) => handleSubmit(e, selectedTodo.id, task.id)}>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="text-input"
                />
                <button className="btn" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-delete"
                  type="button"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={(e) => ToggleTask(task.id, e.target.checked)}
                  checked={task.completed}
                  className="mr-2"
                />
                <h2
                  style={{
                    color: task.completed ? 'gray' : 'black',
                  }}
                >
                  {task.title}
                </h2>
              </label>
            )}

            {editTaskId !== null ? (
              <></>
            ) : (
              <div>
                {' '}
                <button
                  className="btn"
                  onClick={() => handleEdit(task.id, task.title)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => HandleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayToDoList;
