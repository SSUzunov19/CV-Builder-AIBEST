import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ userId, setUserId, userName, setUserName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
    setUserName(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    navigate('/');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  const handleHome = () => {
    navigate('/');
  };

  console.log('userId navbar:', userId);
  console.log('userName navbar: ', userName);

  // console.log what is the type of userId
  console.log('typeof userId: ', typeof userId);


  return (
    <div className="navbar-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <a onClick={handleHome}>Wonder Woman</a>
        </div>
        <div className="account-btns">
          {userId != "null" ? (
            <>
              <span>Hello, {userName}</span>
              <button className="nav-bth" onClick={() => navigate('/dashboard')}>Dashboard</button>
              <button className="nav-bth" onClick={handleSettings}>Settings</button>
              <button className="nav-bth" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="nav-bth" onClick={() => navigate('/login')}>Login</button>
              <button className="nav-bth" onClick={() => navigate('/register')}>Register</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
