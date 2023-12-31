import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './components/Homepage Components/Homepage/HomePage';
import Dashboard from './components/ResumeDashboard/ResumeDashboard';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';
import TemplateSwitcher from "./components/Template Components/MainContent/MainContent";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Settings from './components/Homepage Components/Settings/Settings';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // This is blue.
    },
    secondary: {
      main: '#dc004e', // This is pink.
    },
  },
});

function App() {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [userName, setUserName] =  useState(localStorage.getItem('userName') || null);
  const [resumeId, setResumeId] = useState("");
  const [templateId, setTemplateId] = useState(null);
  const [premiumAccount, setPremiumAccount] = useState(false);

  useEffect(() => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
  }, [userId], [userName]);

  useEffect(() => {
    if(userId === null) {
      setTemplateId(1);
    }
  }, [userId]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName} setTemplateId={setTemplateId}/>} />
            <Route path="/login" element={<Login setUserId={setUserId} setUserName={setUserName}/>} />
            <Route path="/register" element={<Register setUserId={setUserId} setUserName={setUserName}/>} />
            <Route path="/settings" element={<Settings userId={userId} userName={userName} setUserName={setUserName} premiumAccount={premiumAccount} setPremiumAccount={setPremiumAccount}/>} />
            <Route path="/dashboard" element={<Dashboard userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName} setResumeId={setResumeId} setTemplateId={setTemplateId}/>} />
            <Route path="/builder/:id" element={<ResumeBuilder userId={userId} templateId={templateId} setTemplateId={setTemplateId} resumeId={resumeId} premiumAccount={premiumAccount} />} />
            <Route path="/builder/:id/template" element={<TemplateSwitcher userId={userId} setTemplateId={setTemplateId}/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
