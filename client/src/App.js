import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './components/Homepage Components/Homepage/HomePage';
import Dashboard from './components/ResumeDashboard/ResumeDashboard';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';
import TemplateSwitcher from "./components/Template Components/MainContent/MainContent";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
  const [userId, setUserId] = useState(null);
  console.log('App.js userId:', userId);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUserId={setUserId} />} />
            <Route path="/register" element={<Register setUserId={setUserId} />} />
            <Route path="/dashboard" element={<Dashboard userId={userId} />} />
            <Route path="/builder/:id" element={<ResumeBuilder userId={userId} />} />
            <Route path="/builder/:id/template" element={<TemplateSwitcher userId={userId} />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;