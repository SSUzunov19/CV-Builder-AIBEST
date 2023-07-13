import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { updateSection } from '../services/api';

const ResumeSectionForm = ({ section }) => {
  const [type, setType] = useState(section.type || '');
  const [content, setContent] = useState(section.content || '');

  const handleSubmit = (event) => {
    event.preventDefault();

    const sectionData = {
      type: type,
      content: content,
    };
  
    updateSection(section.id, sectionData)
      .then(updatedSection => {
        console.log('Updated section:', updatedSection);
      })
      .catch(error => {
        console.error('Failed to update section:', error);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        fullWidth
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />

      <TextField
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <Button variant="contained" color="primary" type="submit">
        ari 
      </Button>
    </Box>
  );
};

export default ResumeSectionForm;
