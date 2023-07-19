import React, { useState } from 'react';
import { changeEmail, changePassword, deleteUser } from '../../../services/api';

export default function Settings({ userId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div>
      <h1>Settings</h1>

      <form onSubmit={handleChangeEmail}>
        <h2>Change Email</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="New email"
        />
        <button type="submit">Change Email</button>
      </form>

      <form onSubmit={handleChangePassword}>
        <h2>Change Password</h2>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="New password"
        />
        <button type="submit">Change Password</button>
      </form>

      <form onSubmit={handleDeleteAccount}>
        <h2>Delete Account</h2>
        <button type="submit">Delete Account</button>
      </form>
    </div>
  );
}
