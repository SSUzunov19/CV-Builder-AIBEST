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
  const [template, setTemplate] = useState(1);

  useEffect(() => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
  }, [userId], [userName]);

  console.log('App.js userId:', userId);
  console.log('App.js userName:', userName);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName}/>} />
            <Route path="/login" element={<Login setUserId={setUserId} setUserName={setUserName}/>} />
            <Route path="/register" element={<Register setUserId={setUserId} setUserName={setUserName}/>} />
            <Route path="/settings" element={<Settings userId={userId} userName={userName} setUserName={setUserName}/>} />
            <Route path="/dashboard" element={<Dashboard userId={userId} />} />
            <Route path="/builder/:id" element={<ResumeBuilder userId={userId} template={template} setTemplate={setTemplate} />} />
            <Route path="/builder/:id/template" element={<TemplateSwitcher userId={userId} setTemplate={setTemplate}/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
