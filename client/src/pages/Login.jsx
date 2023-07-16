import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchUsers } from '../services/api';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let users;
    let user;

    const handleSubmit = async (e) => {
        e.preventDefault();

        users = await fetchUsers();
        
        if (!validateEmail(email)) {
            console.log('Email does not exist');
            return;
        }
        
        if (!validatePassword(pass)) {
            console.log('Password is incorrect');
            return;
        }
        
        console.log("Logged in");
    };
      
    const validateEmail = (email) => {
        if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(email)) {
            return false;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                user = users[i];
                return true;
            }
        }
        
        return false;
    };
    
    const validatePassword = (password) => {
        if (user.password === password) {
            return true;
        }

        return false;
    };

    let navigate = useNavigate();

    const routeChange = () =>{ 
      let path = `/register`; 
      navigate(path);
    }

    return (
        <div className='Body'>
            <Navbar></Navbar>
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <img className="emailimage2" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="Email Icon"/>
                <img className="passwordimage2" src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png" alt="Password Icon"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email"/> <br /> <br />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" /> <br /> <br />
                    <button className="Log-In-btn" type="submit">Log In</button> <br /> <br />
                    <a href="#NowhereForNow">Forgot Password?</a>
                <p> Don't have an account? Click here to <a href="#" onClick={routeChange}>sign up</a></p>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login;