import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./Login.css";
import Layout from "../Homepage Components/Layout/Layout"
import Navbar from "../Homepage Components/Navbar/Navbar";
import Footer from "../Homepage Components/Footer/Footer";
import { loginUser } from "../../services/api";
import { useNavigate } from 'react-router-dom';

export const Login = ({ props, setUserId, setUserName }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setSnackbarMessage("Invalid email");
      setOpenSnackbar(true);
      return;
    }

    if (!validatePassword(pass)) {
      setSnackbarMessage("Invalid password. Password should be at least 8 characters.");
      setOpenSnackbar(true);
      return;
    }

    try {
      const hashedPassword = await hashPassword(pass);
      const data = await loginUser(email, hashedPassword);
      console.log("Logged in");
      setUserId(data.userId); // Setting user id here
      setUserName(data.username);
      console.log("data.username: ", data.username);
      navigate("/dashboard");
    } catch (error) {
      console.error('Error logging in:', error);
      setSnackbarMessage("Error logging in. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
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

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <Layout>
      <Navbar />
      <div className="auth-form-container">

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="Emailinput"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />{" "}
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="Passwordinput"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />{" "}
          <div className="bth-container">
            <button className="title-btn" type="submit">
              Log In
            </button>{" "}

          </div>
          <p>
            {" "}
            Don't have an account? Click here to{" "}
            <a href="#" onClick={() => navigate('/register')}>
              sign up
            </a>
          </p>
        </form>

      </div>
      <Footer />
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Layout>
  );
};

export default Login;
