import React from 'react';
import ToDoItem from '../components/ToDoItem';

const ToDoList = ({ todo, ToggleTask, HandleDelete }) => {
  return (
    <ul>
      {todo.map((item) => (
        <ToDoItem
          {...item}
          key={item.id}
          ToggleTask={ToggleTask}
          HandleDelete={HandleDelete}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
