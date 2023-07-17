import React from 'react';
import { useNavigate } from "react-router-dom";

import './styles/Navbar.css';

const Navbar = () => {
    let navigate = useNavigate();

    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    const routeChange2 = () =>{
        let path = `/dashboard`;
        navigate(path);
    }

return (
    <nav>
        <div>
            <button onClick={routeChange} className='navButtonLeft'>buildMe</button>
            <button onClick={routeChange2} className='navButtonMid'>Dashboard</button>
        </div>
    </nav>
    );
}
export default Navbar;