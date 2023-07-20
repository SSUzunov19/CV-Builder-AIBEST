import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardActions, CardContent, Button, IconButton, SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import { fetchResumes, deleteResume } from '../../services/api';
import ResumeForm from '../ResumeForm';
import './ResumeDashboard.css';

import Navbar from '../Homepage Components/Navbar/Navbar';
import Footer from '../Homepage Components/Footer/Footer';

import template1 from '../../images/templates/templatee1.png';
import template2 from '../../images/templates/templatee2.png';
import template3 from '../../images/templates/templatee3.png';
import template4 from '../../images/templates/templatee4.png';
import template5 from '../../images/templates/templatee5.png';
import template6 from '../../images/templates/templatee6.png';
import template7 from '../../images/templates/templatee7.png';
import template8 from '../../images/templates/templatee8.png';
import template9 from '../../images/templates/templatee9.png';
import { fontSize } from '@mui/system';

export const ResumeDashboard = ({ userId, setUserId, userName, setUserName, setResumeId, setTemplateId }) => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);
  const [templateId, setTemplateId2] = useState([]);

  setTemplateId(null)

  const navigate = useNavigate();

  const templates = {
    1: template1,
    2: template2,
    3: template3,
    4: template4,
    5: template5,
    6: template6,
    7: template7,
    8: template8,
    9: template9,
  };

  useEffect(() => {
    if (userId !== null && userId !== "") {
      console.log("Fetching resumes for user:", userId);
      fetchResumes(userId)
        .then((resumes) => {
          setResumes(resumes);
          resumes.forEach(resume => setTemplateId2(resume.template_id));
        })
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
    <>
      <Navbar userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName} />
      <ResumeForm userId={userId} />
      <div className="cards-wrapper">
        {resumes.map((resume) => (
          <div key={resume.id} className="card-container">

            <div
              className='card-image'
              style={{ backgroundImage: `url(${templates[resume.template_id]})` }}
            >
            </div>

            <div className='action-btn-container'>
              <p variant="h5" component="div" className='card-title'>
                {resume.title}
              </p>

              <div>
                <IconButton size="large" color="primary" onClick={() => handleShare(resume.id)} className="action-button">
                  <ShareIcon />
                </IconButton>

                <IconButton size="large" color="secondary" onClick={() => handleDelete(resume.id)} className="action-button">
                  <DeleteIcon />
                </IconButton>
              </div>

            </div>

            <IconButton
              className="open-button"
              size="small"
              component={Link}
              to={`/builder/${resume.id}`}
              onClick={() => setResumeId(resume.id)}
              style={{
                borderRadius: "30px",
                background: "linear-gradient(90deg, #4773E3 0%, #87A0DF 100%)",
                color: "white",
                fontSize: "30x"
              }}
            >
              Open
            </IconButton>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ResumeDashboard;
