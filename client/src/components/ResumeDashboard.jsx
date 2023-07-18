import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardActions, CardContent, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import { fetchResumes, deleteResume } from '../services/api';
import ResumeForm from './ResumeForm';
import './ResumeDashboard.css'; // Make sure you import your CSS file

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

  const handleShare = (id) => {
    // handle the share functionality here
  };

  return (
    <div>
      <ResumeForm />
      <div className="cards-wrapper">
        {resumes.map((resume) => (
          <Card key={resume.id} className="card-container">
            <CardContent>
              <Typography variant="h5" component="div">
                {resume.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/builder/${resume.id}`} className="action-button">Open</Button>
              <IconButton size="small" color="primary" onClick={() => handleShare(resume.id)} className="action-button">
                <ShareIcon />
              </IconButton>
              <IconButton size="small" color="secondary" onClick={() => handleDelete(resume.id)} className="action-button">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ResumeDashboard;