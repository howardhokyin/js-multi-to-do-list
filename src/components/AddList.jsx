import React, { useState } from 'react';

const AddList = ({ onSubmitList }) => {
  const [newTitle, setNewTitle] = useState('');

  function HandleAddTitle(e) {
    e.preventDefault();
    if (newTitle === '') return;
    onSubmitList(newTitle);
    setNewTitle('');
  }

  return (
    <form onSubmit={HandleAddTitle} className="my-5 mx-5">
      <input
        type="text"
        className="textbox"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Type the list title here"
      />
      <button type="submit" className="btn w-full">
        Add New List
      </button>
    </form>
  );
};

export default AddList;
