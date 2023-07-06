import React, { useState } from 'react';

function ResumeForm({onSubmit, resume}) {
  const [title, setTitle] = useState(resume ? resume.title : '');
  const [description, setDescription] = useState(resume ? resume.description : '');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({title, description});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;
