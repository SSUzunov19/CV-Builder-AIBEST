import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResumeDashboard from './components/ResumeDashboard';
import Resume from './components/Resume';
import Home from './pages/ResumeBuilder';

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
            <Route path="/" element={<ResumeDashboard />} />
            <Route path="/builder/:id" element={<Home />} />
            <Route path="/resumes/:id" element={<Resume />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;