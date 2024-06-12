import React from 'react';
import MarkDownNote from '../components/MarkDownNote';
import DisplayMarkDownNote from '../components/DisplayMarkDownNote';

const MarkDownNotePage = () => {
  const handleNote = () => {};
  return (
    <div className="flex flex-col">
      <h1>Mark Down Note</h1>
      <div className="flex flex-row">
        <MarkDownNote onSubmitNote={handleNote} />
        <DisplayMarkDownNote />
      </div>
    </div>
  );
};

export default MarkDownNotePage;
