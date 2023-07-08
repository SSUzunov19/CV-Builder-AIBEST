import React, { useState } from 'react';
import { createResume } from '../services/api';

function ResumeForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createResume({ title }).then((resume) => {
      // do something with the new resume
      console.log(resume);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default ResumeForm;
