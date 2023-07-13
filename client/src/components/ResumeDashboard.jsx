import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { fetchResumes, deleteResume } from '../services/api';
import ResumeForm from './ResumeForm';

function ResumeDashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes().then(setResumes);
  }, []);

  const handleDelete = (id) => {
    deleteResume(id).then(() => {
      setResumes(resumes.filter((resume) => resume.id !== id));
    });
  };

  return (
    <div>
      <ResumeForm />
      {resumes.map((resume) => (
        <div key={resume.id}>
          <Typography variant="h5" component="h5">
            {resume.title}
          </Typography>
          <Link to={`/resumes/${resume.id}`}>Open</Link>
          <button onClick={() => handleDelete(resume.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ResumeDashboard;
