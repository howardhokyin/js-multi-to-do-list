import React from 'react';

const ClearLocalStorageButton = () => {
  function handleClearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="flex my-5 mx-5">
      <button onClick={handleClearLocalStorage} className="btn btn-delete ">
        Clear LocalStorage
      </button>
    </div>
  );
};

export default ClearLocalStorageButton;
