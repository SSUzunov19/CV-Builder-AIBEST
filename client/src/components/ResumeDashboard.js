import React, { useState, useEffect } from 'react';
import ResumeForm from './ResumeForm';
import Resume from './Resume';
import { fetchResumes, createResume, updateResume, deleteResume } from '../services/api';

function ResumeDashboard() {
  const [resumes, setResumes] = useState([]);
  const [currentResume, setCurrentResume] = useState(null);

  useEffect(() => {
    fetchResumes()
      .then(response => setResumes(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCreate = resume => {
    console.log("handleCreate");
    createResume(resume)
      .then(response => setResumes([...resumes, response.data]))
      .catch(error => console.error(error));
  };

  const handleUpdate = updatedResume => {
    updateResume(updatedResume.id, updatedResume)
      .then(response => setResumes(resumes.map(resume => resume.id === response.data.id ? response.data : resume)))
      .catch(error => console.error(error));
    setCurrentResume(null);
  };

  const handleDelete = resumeToDelete => {
    deleteResume(resumeToDelete.id)
      .then(() => setResumes(resumes.filter(resume => resume.id !== resumeToDelete.id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      {currentResume 
        ? <ResumeForm onSubmit={handleUpdate} resume={currentResume} /> 
        : <ResumeForm onSubmit={handleCreate} />
      }
      {resumes.map(resume => 
        <Resume 
          key={resume.id} 
          resume={resume} 
          onEdit={() => setCurrentResume(resume)} 
          onDelete={() => handleDelete(resume)} 
        />
      )}
    </div>
  );
}

export default ResumeDashboard;
