import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { getResumeById, updateResume, updateSection, deleteSection } from '../services/api';

function Resume() {
  const { id } = useParams();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getResumeById(id).then((response) => {
      console.log('Response:', response); // Check the entire response
      console.log('Sections:', response.sections); // Check just the sections
      setResume(response);
    });
  }, [id]);

  const handleSave = () => {
    updateResume(resume.id, resume).then((updatedResume) => {
      console.log('Updated resume:', updatedResume);
    });
  }

  const handleUpdate = async (id) => {
    const updatedSection = {
      // The updated data for the section
    };
  
    const response = await updateSection(id, updatedSection);
  
    if (response.success) {
      // If the update was successful, update the state with the new section data
      setResume((prevResume) => {
        const updatedSections = prevResume.sections.map((section) =>
          section.id === id ? response.data : section
        );
        return { ...prevResume, sections: updatedSections };
      });
    } else {
      // Handle the error
      console.error('An error occurred while updating the section:', response.error);
    }
  };
  
  const handleDelete = async (id) => {
    const response = await deleteSection(id);
  
    if (response.success) {
      // If the delete was successful, remove the section from the state
      setResume((prevResume) => {
        const updatedSections = prevResume.sections.filter((section) => section.id !== id);
        return { ...prevResume, sections: updatedSections };
      });
    } else {
      // Handle the error
      console.error('An error occurred while deleting the section:', response.error);
    }
  };

  if (!resume) {
    return 'Loading...';
  }

  if (resume.error) {
    return 'Resume not found';
  }

  console.log('Resume sections:', resume.sections);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {resume.title}
      </Typography>

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
}

export default Resume;
