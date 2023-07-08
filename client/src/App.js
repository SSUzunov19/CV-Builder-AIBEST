import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeDashboard from './components/ResumeDashboard';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import ResumeSectionForm from './components/ResumeSectionForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ResumeDashboard />} />
          <Route path="/resumes/new" element={<ResumeForm />} />
          <Route path="/resumes/:id" element={<Resume />} />
          <Route path="/sections/new" element={<ResumeSectionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
