import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input className="Nameinput" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" /> <br /> <br />
            <img className="emailimage" src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png"/>
            <img className="userimage" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"/>
            <img className="passwordimage" src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png"/>
            <input className="Emailinput" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" /> <br /> <br />  
            <input className="Passwordinput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" /> <br /> <br />
            <button className="Create-Account-cat" type="submit">Create Account</button> <br /> <br />
            <p> Already have an account? Click <a href='#' onClick={() => props.onFormSwitch('login')}>here</a> to login</p>
        </form>
    </div>
    )
}