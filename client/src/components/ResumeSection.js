import React from 'react';

const ResumeSection = ({ section, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>{section.type}</h2>
      <p>{section.content}</p>
      <button onClick={() => onUpdate(section.id)}>Update</button>
      <button onClick={() => onDelete(section.id)}>Delete</button>
    </div>
  );
}

export default ResumeSection;
