import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Layout from "../Homepage Components/Layout/Layout"
import Navbar from "../Homepage Components/Navbar/Navbar";
import Footer from "../Homepage Components/Footer/Footer";
import "./Register.css";
import { createUser } from "../../services/api";
import { useNavigate } from 'react-router-dom';

export const Register = ({ props, setUserId, setUserName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const navigate = useNavigate();

  const handleSubmit = async (e) => { // <-- mark this function as async
    e.preventDefault();

    if (!validateName(name)) {
      setSnackbarMessage("Invalid Username");
      setOpenSnackbar(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarMessage("Invalid email");
      setOpenSnackbar(true);
      return;
    }

    if (!validatePassword(pass)) {
      setSnackbarMessage("Invalid password");
      setOpenSnackbar(true);
      return;
    }

    const hashedPassword = await hashPassword(pass); // <-- use await here

    const user = {
      username: name,
      email: email,
      password: hashedPassword, // <-- use hashedPassword here
    };

    const passwordErrors = validatePassword(pass);

  if (passwordErrors.length > 0) {
    setSnackbarMessage(passwordErrors.join("\n"));
    setOpenSnackbar(true);
    return;
  }

    
    

    createUser(user)
      .then((createdUser) => {
        // Handle successful user creation
        console.log("User created:", createdUser);
        setUserId(createdUser.id);
        setUserName(name);
        console.log("createdUser.username: ", createdUser.username);
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle error during user creation
        console.error("Error creating user:", error);
        setSnackbarSeverity("error");
      setOpenSnackbar(true);
      });
  };

  const validatePassword = (password) => {
    // Requirements
    const minPasswordLength = 8;
    const maxPasswordLength = 50;
  
    // Set to false to disable requirement
    const hasLowerCase = true;
    const hasUpperCase = true;
    const hasNumber = true;
    const hasSpecialCharacter = true;
  
    const errors = [];
  
    if (password.length < minPasswordLength || password.length > maxPasswordLength) {
      errors.push(`Password must be between ${minPasswordLength} and ${maxPasswordLength} characters.`);
    }
  
    if (!/[a-z]/.test(password) || !hasLowerCase) {
      errors.push("Password must contain at least one lowercase letter.");
    }
  
    if (!/[A-Z]/.test(password) || !hasUpperCase) {
      errors.push("Password must contain at least one uppercase letter.");
    }
  
    if (!/[0-9]/.test(password) || !hasNumber) {
      errors.push("Password must contain at least one numeric digit.");
    }
  
    if (!/[!@#$%^&*]/.test(password) || !hasSpecialCharacter) {
      errors.push("Password must contain at least one special character.");
    }
  
    return errors;
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

  const validateName = (username) => {
    // Requirements

    const minUsernameLength = 2;
    const maxUsernameLength = 40;

    if (
      username.length < minUsernameLength ||
      username.length > maxUsernameLength
    ) {
      console.log(
        `Username must be between ${minUsernameLength} and ${maxUsernameLength} characters`
      );
      return false;
    }

    if (!/^[a-zA-Z0-9_\-.\s]+$/.test(username)) {
      console.log(
      "Username can only contain letters, numbers, underscores, hyphens, dots, and spaces");
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
      email
    );
  };

  return (
    <Layout>
      <Navbar/>
      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input
            className="Nameinput"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Username"
          />{" "}

          <input
            className="Emailinput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />{" "}
          <input
            className="Passwordinput"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />{" "}
          <button className="title-btn" type="submit">
            Create Account
          </button>{" "}
          <p id="register-subtext">
            {" "}
            Already have an account? Click here to{" "}
            <a href="#" onClick={() => props.onFormSwitch("login")}>
              login
            </a>
          </p>
        </form>

      </div>
      <Footer/>
      <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Layout>
  );
};
export default Register;
