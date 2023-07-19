import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Card, CardActions, CardContent, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import { fetchResumes, deleteResume } from '../../services/api';
import ResumeForm from '../ResumeForm';
import './ResumeDashboard.css';

export const ResumeDashboard = ( userId ) => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId.userId !== null && userId.userId !== "") {
      console.log("Fetching resumes for user:", userId.userId);
      fetchResumes(userId.userId)
        .then(setResumes)
        .catch((error) => {
          console.error("Error fetching resumes:", error);
        });
    } else {
      setError("You need to create an account to view this page.");
    }
  }, [userId]);

  const handleDelete = (id) => {
    deleteResume(id).then(() => {
      setResumes(resumes.filter((resume) => resume.id !== id));
    });
  };

  const handleShare = (id) => {
    // handle the share functionality here
  };

  if (error) {
    return (
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        height="100vh" 
        padding="1rem" 
        textAlign="center"
      >
        <Typography variant="h3" component="h1" color="error" gutterBottom>
          {error}
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/register')}>
          Create an Account
        </Button>
      </Box>
    );
  }

  return (
    <div>
      <ResumeForm userId={userId}/>
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
