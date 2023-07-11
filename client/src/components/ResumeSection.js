import React, { useState, useEffect } from 'react';

const ResumeSection = ({ section, onDelete, onUpdate }) => {
  const [formData, setFormData] = useState(section);

  useEffect(() => {
    setFormData(section);
  }, [section]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2>{section.type}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input type="text" name="type" value={formData.type} onChange={handleChange} />
        </label>
        <label>
          Content:
          <input type="text" name="content" value={formData.content} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDelete(section.id)}>Delete</button>
    </div>
  );
}

export default ResumeSection;
