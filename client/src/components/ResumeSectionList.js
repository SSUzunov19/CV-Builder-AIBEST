import React from 'react';
import ResumeSection from './ResumeSection';

const ResumeSectionList = ({ sections, onDelete, onUpdate }) => {
  return (
    <div>
      {sections.map((section) => (
        <ResumeSection 
          key={section.id} 
          section={section}
          onDelete={onDelete}
          onUpdate={onUpdate} 
        />
      ))}
    </div>
  );
}

export default ResumeSectionList;
