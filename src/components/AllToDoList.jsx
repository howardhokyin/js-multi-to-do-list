import React, { useState } from 'react';

const AllToDoList = ({
  todo,
  HandleSelect,
  HandleDeleteList,
  onSubmitEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  function HandleEditBtn(listID, listTitle) {
    setEditedTitle(listTitle);
    setEditID(listID);
    setIsEdit(true);
  }

  function HandleEditList(event, listID) {
    event.preventDefault();
    onSubmitEdit(editID, editedTitle);
    setIsEdit(false);
  }

  function HandleCancel() {
    setIsEdit(false);
  }

  return (
    <div className=" my-5 mx-5">
      {todo.length === 0 && <p>No list</p>}
      <ul>
        {todo.map((list) => (
          <li
            key={list.id}
            className="w-full flex justify-between items-center"
          >
            {isEdit && editID === list.id ? (
              <form
                className="flex justify-between"
                onSubmit={(event) => HandleEditList(event, list.id)}
              >
                {' '}
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  style={{ fontSize: 'inherit' }}
                />
                <button className="btn" type="submit">
                  Save
                </button>
              </form>
            ) : (
              <label onClick={(e) => HandleSelect(list.id)} className="w-full">
                {list.title}
              </label>
            )}

            <div>
              {isEdit && editID === list.id ? (
                <button className="btn" onClick={(e) => HandleCancel()}>
                  Cancel
                </button>
              ) : (
                <div className="flex justify-between">
                  <button
                    className="btn"
                    onClick={(e) => HandleEditBtn(list.id, list.title)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-delete "
                    onClick={(e) => HandleDeleteList(list.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllToDoList;
