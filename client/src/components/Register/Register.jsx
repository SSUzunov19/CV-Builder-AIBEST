import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      console.log("Invalid name");
      return;
    }

    if (!validateEmail(email)) {
      console.log("Invalid email");
      return;
    }

    if (!validatePassword(pass)) {
      console.log("Invalid password");
      return;
    }

    const user = {
      username: name,
      email: email,
      password: pass,
    };

    console.log(name, email, pass);
  };

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
        "Username can only contain letters, numbers, underscores, hyphens, dots, and spaces"
      );
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(
      email
    );
  };

  const validatePassword = (password) => {
    // Requirements

    const minPasswordLength = 8;
    const maxPasswordLength = 20;

    // Set to false to disable requirement
    const hasLowerCase = true;
    const hasUpperCase = true;
    const hasNumber = true;
    const hasSpecialCharacter = true;

    if (
      password.length < minPasswordLength ||
      password.length > maxPasswordLength
    ) {
      console.log(
        `Password must be between ${minPasswordLength} and ${maxPasswordLength} characters`
      );
      return false;
    }

    if (!/[a-z]/.test(password) || !hasLowerCase) {
      console.log("Password must contain at least one lowercase letter");
      return false;
    }

    if (!/[A-Z]/.test(password) || !hasUpperCase) {
      console.log("Password must contain at least one uppercase letter");
      return false;
    }

    if (!/[0-9]/.test(password) || !hasNumber) {
      console.log("Password must contain at least one numeric digit");
      return false;
    }

    if (!/[!@#$%^&*]/.test(password) || !hasSpecialCharacter) {
      console.log("Password must contain at least one special character");
      return false;
    }

    return true;
  };

  return (
    <div className="auth-form-container">
      <Navbar />
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          className="Nameinput"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full Name"
        />{" "}
        <br /> <br />
        <img
          className="emailimage"
          src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"
          alt=""
        />
        <img
          className="userimage"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
          alt=""
        />
        <img
          className="passwordimage"
          src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png"
          alt=""
        />
        <input
          className="Emailinput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />{" "}
        <br /> <br />
        <input
          className="Passwordinput"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />{" "}
        <br /> <br />
        <button className="Create-Account-cat" type="submit">
          Create Account
        </button>{" "}
        <br /> <br />
        <p>
          {" "}
          Already have an account? Click here to{" "}
          <a href="#" onClick={() => props.onFormSwitch("login")}>
            login
          </a>
        </p>
      </form>
      <Footer />
    </div>
  );
};
export default Register;
