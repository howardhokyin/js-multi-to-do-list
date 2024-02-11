import React from 'react';

const AllToDoList = ({ todo, HandleSelect, HandleDeleteList }) => {
  return (
    <div className=" my-5 mx-5">
      {todo.length === 0 && <p>No list</p>}
      <ul>
        {todo &&
          todo.map((list) => (
            <li
              key={list.id}
              className="w-full flex justify-between items-center"
            >
              <label onClick={(e) => HandleSelect(list.id)} className="w-full">
                {list.title}
              </label>
              <button
                className="btn btn-delete "
                onClick={(e) => HandleDeleteList(list.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllToDoList;
