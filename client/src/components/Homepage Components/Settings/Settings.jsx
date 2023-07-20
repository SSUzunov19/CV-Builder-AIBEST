import React, { useState } from 'react';
import { changeUsername, changeEmail, changePassword, deleteUser } from '../../../services/api';
import { TextField, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Settings.css';

export default function Settings({ userId, userName, setUserName, premiumAccount, setPremiumAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const handlePremium = (e) => {
    e.preventDefault();

    // Simulate the payment process
    setTimeout(() => {
      console.log('Payment successful');
      setOpenPaymentModal(false);
      setPremiumAccount(true);
    }, 1000);
  };


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

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const hashedPassword = await hashPassword(pass);

    changePassword(userId, hashedPassword)
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

  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await window.crypto.subtle.digest('SHA-256', data);

    // Convert buffer to byte array
    const hashArray = Array.from(new Uint8Array(hash));

    // Convert bytes to hex string
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashedPassword;

    
  }

  return (
    <>
      <Navbar userId={userId} userName={userName}></Navbar>
      <div className="settings-container">
        {!premiumAccount && (
          <div>
            <Button variant="contained" color="primary" onClick={() => setOpenPaymentModal(true)}>
              Become Premium
            </Button>
            <Dialog open={openPaymentModal} onClose={() => setOpenPaymentModal(false)}>
              <DialogTitle>Become Premium</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To become a premium user, please enter your payment details. The cost is 2 BGN.
                </DialogContentText>
                <TextField
                  margin="dense"
                  id="cardInfo"
                  label="Card Information"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenPaymentModal(false)} color="primary">
                  Cancel
                </Button>
                <Button onClick={handlePremium} color="primary">
                  Pay
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )}

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