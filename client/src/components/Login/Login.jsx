import React, { useState } from "react";
import styles from "./login.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      console.log("Invalid email");
      return;
    }

    if (!validatePassword(pass)) {
      console.log("Invalid password");
      return;
    }

    // registerUser(email, pass);
    console.log("Logged in");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className={styles["auth-form-container"]}>
      <Navbar />
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <img
          className={styles["emailimage2"]}
          src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
          alt=""
        />
        <img
          className={styles["passwordimage2"]}
          src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png"
          alt=""
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles["login-input"]}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />{" "}
        <br /> <br />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className={styles["login-input"]}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />{" "}
        <br /> <br />
        <button className={styles["Log-In-btn"]} type="submit">
          Log In
        </button>{" "}
        <br /> <br />
        <a href="#">Forgot Password?</a>
        <p>
          {" "}
          Don't have an account? Click here to{" "}
          <a href="#" onClick={() => props.onFormSwitch("register")}>
            sign up
          </a>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;