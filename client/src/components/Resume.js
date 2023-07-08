import React, { useEffect, useState } from 'react';
import { fetchResumes } from '../services/api';

function Resume({ id }) {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetchResumes(id).then(setResume);
  }, [id]);

  if (!resume) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>{resume.title}</h1>
      {/* other resume fields here */}
    </div>
  );
}

export default Resume;
