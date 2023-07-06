import React from 'react';

function Resume({resume, onEdit, onDelete}) {
  return (
    <div>
      <h2>{resume.title}</h2>
      <p>{resume.description}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Resume;
