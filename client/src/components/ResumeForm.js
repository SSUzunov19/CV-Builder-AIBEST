import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createResume } from '../services/api';
import { Button, TextField, Container, Typography } from '@mui/material';

function ResumeForm() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newResume = { 
      title, 
      sections: ['personal', 'education', 'experience', 'skills'].map((type) => ({ type, content: '' }))
    };

    createResume(newResume).then((resume) => {
      navigate(`/resumes/${resume.id}`);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Create a new resume
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </form>
    </Container>
  );
}

export default ResumeForm;
