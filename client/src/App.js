import React from 'react';
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
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/builder/:id" element={<ResumeBuilder />} />
            <Route path="/builder/:id/template" element={<TemplateSwitcher />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;