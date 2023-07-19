import React, { useState } from 'react';
import { changeUsername, changeEmail, changePassword, deleteUser } from '../../../services/api';
import { TextField, Button } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Settings.css';

export default function Settings({ userId, userName, setUserName}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleChangeUsername = (e) => {
    e.preventDefault();

    changeUsername(userId, username)
      .then(() => {
        console.log('Username changed successfully');
      })
      .catch((error) => {
        console.error('Error changing Username:', error);
      });
    
    setUserName(username);
  };

  const handleChangeEmail = (e) => {
    e.preventDefault();

    changeEmail(userId, email)
      .then(() => {
        console.log('Email changed successfully');
      })
      .catch((error) => {
        console.error('Error changing email:', error);
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    changePassword(userId, password)
      .then(() => {
        console.log('Password changed successfully');
      })
      .catch((error) => {
        console.error('Error changing password:', error);
      });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();

    deleteUser(userId)
      .then(() => {
        console.log('Account deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting account:', error);
      });
  };

  return (
    <>
      <Navbar userId={userId} userName={userName}></Navbar>
      <div className="settings-container">
        <h1>Settings</h1>

        <form onSubmit={handleChangeUsername} className="settings-form">
          <h2>Change Username</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="New Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Change Username
          </Button>
        </form>

        <form onSubmit={handleChangeEmail} className="settings-form">
          <h2>Change Email</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="New Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Change Email
          </Button>
        </form>

        <form onSubmit={handleChangePassword} className="settings-form">
          <h2>Change Password</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Change Password
          </Button>
        </form>

        <form onSubmit={handleDeleteAccount} className="settings-form">
          <h2>Delete Account</h2>
          <Button type="submit" variant="contained" color="secondary">
            Delete Account
          </Button>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}