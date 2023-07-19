import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ userId, setUserId, userName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
    localStorage.removeItem('userId');
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
          {userId ? (
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
