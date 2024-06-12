import React, { useState } from 'react';

const MarkDownNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmitNote(content);
  };

  return (
    <div className="w-1/2">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <label>Title : </label>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Content : </label>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default MarkDownNote;
