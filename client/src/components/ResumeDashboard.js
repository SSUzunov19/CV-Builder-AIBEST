import React, { useEffect, useState } from 'react';
import { fetchResumes, deleteResume } from '../services/api';
import Resume from './Resume';
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
          <Resume id={resume.id} />
          <button onClick={() => handleDelete(resume.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ResumeDashboard;
