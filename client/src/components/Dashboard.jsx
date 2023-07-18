import React from "react";

import "../style/dashboard.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Resume from "./Resume";

const resumeData = [
  {
    id: "1",
    user_id: "user1",
    template_id: "template1",
    title: "Resume 1",
    created_at: "2023-07-16T10:30:00Z",
    updated_at: "2023-07-16T12:45:00Z",
  },
  {
    id: "2",
    user_id: "user2",
    template_id: "template2",
    title: "Resume 2",
    created_at: "2023-07-16T09:15:00Z",
    updated_at: "2023-07-16T11:20:00Z",
  },
  {
    id: "3",
    user_id: "user3",
    template_id: "template3",
    title: "Resume 3",
    created_at: "2023-07-16T09:15:00Z",
    updated_at: "2023-07-16T11:20:00Z",
  },
  {
    id: "4",
    user_id: "user4",
    template_id: "template4",
    title: "Resume 4",
    created_at: "2023-07-16T09:15:00Z",
    updated_at: "2023-07-16T11:20:00Z",
  },
];

const Dashboard = () => {
  return (
    <div className="Body">
      <Navbar></Navbar>
      <div className="ResumeGrid">
        {resumeData.map((resume) => (
          <Resume id={resume.id} title={resume.title}></Resume>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
