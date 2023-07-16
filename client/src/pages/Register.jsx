import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUser, fetchUsers } from '../services/api';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let users;

    const handleSubmit = async (e) => {
        e.preventDefault();

        users = await fetchUsers();
        
        if (!validateName(name)) {
            console.log('Invalid name');
            return;
        }

        if (!validateEmail(email)) {
            console.log('Invalid email');
            return;
        }
        
        if (!validatePassword(pass)) {
            console.log('Invalid password');
            return;
        }

        const user = {
            username: name,
            email: email,
            password: pass,
        };

        console.log(name, email, pass);
        
        createUser(user);
    };
    
    const validateName = (username) => {
        // Requirements

        const minUsernameLength = 2;
        const maxUsernameLength = 40;

        if (username.length < minUsernameLength || username.length > maxUsernameLength) {
          console.log(`Username must be between ${minUsernameLength} and ${maxUsernameLength} characters`);
          return false;
        }
      
        if (!/^[a-zA-Z0-9_\-.\s]+$/.test(username)) {
          console.log('Username can only contain letters, numbers, underscores, hyphens, dots, and spaces');
          return false;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username) {
                console.log('Username already exists');
                return false;
            }
        }
      
        return true;
    };

    const validateEmail = (email) => {
        if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(email)) {
            return false;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                console.log('Email already exists');
                return false;
            }
        }
        
        return true;
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

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
          console.log(`Password must be between ${minPasswordLength} and ${maxPasswordLength} characters`);
          return false;
        }
      
        if (!/[a-z]/.test(password) || !hasLowerCase) {
          console.log('Password must contain at least one lowercase letter');
          return false;
        }
      
        if (!/[A-Z]/.test(password) || !hasUpperCase) {
          console.log('Password must contain at least one uppercase letter');
          return false;
        }
      
        if (!/[0-9]/.test(password) || !hasNumber) {
          console.log('Password must contain at least one numeric digit');
          return false;
        }
      
        if (!/[!@#$%^&*]/.test(password) || !hasSpecialCharacter) {
          console.log('Password must contain at least one special character');
          return false;
        }
      
        return true;
    };
      
    let navigate = useNavigate();

    const routeChange = () =>{ 
      let path = `/login`; 
      navigate(path);
    }

    return (
      <div className='Body'>
        <Navbar></Navbar>
        <div className="auth-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
              <h2>Register</h2>
              <input className="Nameinput" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Username" /> <br /> <br />
              <img className="emailimage" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"/>
              <img className="userimage" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"/>
              <img className="passwordimage" src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png"/>
              <input className="Emailinput" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" /> <br /> <br />  
              <input className="Passwordinput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" /> <br /> <br />
              <button className="Create-Account-cat" type="submit">Create Account</button> <br /> <br />
              <p> Already have an account? Click here to <a href="#" onClick={routeChange}>login</a></p>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Register;