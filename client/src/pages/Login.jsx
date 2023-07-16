import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            console.log('Invalid email');
            return;
        }
        
        if (!validatePassword(pass)) {
            console.log('Invalid password');
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