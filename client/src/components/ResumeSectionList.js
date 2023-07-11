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
          onUpdate={(updatedSection) => onUpdate(section.id, updatedSection)} 
          // Call onUpdate with the section id and the updated section data
        />
      ))}
    </div>
  );
};

export default ResumeSectionList;

