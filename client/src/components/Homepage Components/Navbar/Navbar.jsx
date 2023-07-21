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

  return (
    <div className="navbar-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <a onClick={handleHome}>Wonder Woman</a>
        </div>
        <div className="account-btns">
          {userId != "null" && userId != null ? (
            <>
              <span className="greeting">Hello, {userName}</span>
              <button className="nav-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>
              <button className="nav-btn" onClick={handleSettings}>Settings</button>
              <button className="nav-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
              <button className="nav-btn" onClick={() => navigate('/register')}>Register</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
