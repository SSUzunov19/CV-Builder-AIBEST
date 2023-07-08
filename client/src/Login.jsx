import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <img className="emailimage2" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"/>
            <img className="passwordimage2" src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email"/> <br /> <br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" /> <br /> <br />
                <button className="Log-In-btn" type="submit">Log In</button> <br /> <br />
                <a href="#">Forgot Password?</a>
            <p> Don't have an account? Click <a href='#' onClick={() => props.onFormSwitch('register')}>here</a> to sign up</p>
            </form>
        </div>
    )
}