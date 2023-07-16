import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const resumeData = [
    {
      id: '1',
      user_id: 'user1',
      template_id: 'template1',
      title: 'Resume 1',
      created_at: '2023-07-16T10:30:00Z',
      updated_at: '2023-07-16T12:45:00Z',
    },
    {
      id: '2',
      user_id: 'user2',
      template_id: 'template2',
      title: 'Resume 2',
      created_at: '2023-07-16T09:15:00Z',
      updated_at: '2023-07-16T11:20:00Z',
    },
    // Add more objects here
  ];
  
  const Dashboard = () => {
    return (
      <div className='Body'>
        <Navbar></Navbar>
        <div className="ResumeGrid">
          {resumeData.map((resume) => (
            <div key={resume.id} className="ResumeItem">
              <div className="Title">{resume.title}</div>
              <div className="Actions">
                <button className="OpenButton">Open</button>
                <button className="DeleteButton">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </div>
    );
  };
export default Dashboard;