import React from "react";

import "./styles/Resume.css";

const Resume = (resume) => {
  return (
    <div>
      <div key={resume.id} className="ResumeItem">
        <div className="Title">{resume.title}</div>
        <div className="Actions">
          <button className="OpenButton">Open</button>
          <button className="DeleteButton">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
