import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardActions, CardContent, Button, IconButton, SvgIcon } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
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

function GradientIcon({ colorShades }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="79" height="78" viewBox="0 0 79 78" fill="none">
      <g clip-path="url(#clip0_182_306)">
        <path d="M0.493164 69.5393C0.493164 74.0661 4.17812 77.7351 8.68902 77.7351H70.0308C74.5576 77.7351 78.2267 74.0502 78.2267 69.5393V8.19744C78.2267 3.67066 74.5417 0.00158691 70.0308 0.00158691H8.68902C4.16224 0.00158691 0.493164 3.68654 0.493164 8.19744V69.5393ZM70.0308 73.8437H8.68902C6.32239 73.8437 4.38461 71.9059 4.38461 69.5393V59.2945L19.1244 44.5546L31.72 57.1502C32.4824 57.9126 33.7054 57.9126 34.4678 57.1502L57.2129 34.4051L74.3353 51.5275V69.5393C74.3353 71.9059 72.3975 73.8437 70.0308 73.8437ZM8.68902 3.89303H70.0308C72.3975 3.89303 74.3353 5.83081 74.3353 8.19744V46.0159L58.5789 30.2754C57.8165 29.513 56.5935 29.513 55.8311 30.2754L33.086 53.0205L20.4904 40.4249C19.728 39.6625 18.505 39.6625 17.7426 40.4249L4.38461 53.7829V8.19744C4.38461 5.83081 6.32239 3.89303 8.68902 3.89303Z" fill="url(#paint0_linear_182_306)" />
        <path d="M24.5883 31.149C30.0522 31.149 34.4836 26.7017 34.4836 21.2537C34.4836 15.8056 30.0363 11.3583 24.5883 11.3583C19.1402 11.3583 14.6929 15.8056 14.6929 21.2537C14.6929 26.7017 19.1243 31.149 24.5883 31.149ZM24.5883 15.2497C27.9079 15.2497 30.5922 17.9499 30.5922 21.2537C30.5922 24.5574 27.892 27.2576 24.5883 27.2576C21.2845 27.2576 18.5843 24.5574 18.5843 21.2537C18.5843 17.9499 21.2686 15.2497 24.5883 15.2497Z" fill="url(#paint1_linear_182_306)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_182_306" x1="39.3599" y1="0.00158691" x2="39.3599" y2="77.7351" gradientUnits="userSpaceOnUse">
          <stop stop-color="#597962" />
          <stop offset="1" stop-color="#6FAC8E" />
        </linearGradient>
        <linearGradient id="paint1_linear_182_306" x1="24.5883" y1="11.3583" x2="24.5883" y2="31.149" gradientUnits="userSpaceOnUse">
          <stop stop-color="#597962" />
          <stop offset="1" stop-color="#6FAC8E" />
        </linearGradient>
        <clipPath id="clip0_182_306">
          <rect width="77.7335" height="77.7335" fill="white" transform="translate(0.493164 0.00158691)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const ResumeDashboard = ({ userId, setUserId, userName, setUserName, setResumeId }) => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);
  const [templateId, setTemplateId] = useState(1);

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
          resumes.forEach(resume => setTemplateId(resume.template_id));
        })
        .catch((error) => {
          console.error("Error fetching resumes:", error);
        });
    } else {
      setError("You need to create an account to view this page.");
    }
  }, [userId]);

  console.log("templateId", templateId);
  console.log("AAAAAAAAAAAA", resumes);

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
              style={{ backgroundImage: `url(${templates[templateId]})` }}
            >
              <GradientIcon />
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

            <IconButton size="small" component={Link} to={`/builder/${resume.id}`} onClick={() => setResumeId(resume.id)} className="open-button">Open</IconButton>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ResumeDashboard;
