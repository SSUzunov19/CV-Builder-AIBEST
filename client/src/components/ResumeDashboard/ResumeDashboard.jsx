import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardActions, CardContent, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import { fetchResumes, deleteResume } from '../../services/api';
import ResumeForm from '../ResumeForm';
import './ResumeDashboard.css';

import Navbar from '../Homepage Components/Navbar/Navbar';
import Footer from '../Homepage Components/Footer/Footer';

export const ResumeDashboard = ({ userId, setUserId, userName, setUserName, setResumeId} ) => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId !== null && userId !== "") {
      console.log("Fetching resumes for user:", userId);
      fetchResumes(userId)
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
    const url = `${window.location.origin}/builder/${id}`;
    navigator.clipboard.writeText(url);
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
      <Navbar userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName}/>
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
              <Button size="small" component={Link} to={`/builder/${resume.id}`} onClick={() => setResumeId(resume.id)} className="action-button">Open</Button>
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
      <Footer />
    </div>
  );
}

export default ResumeDashboard;
