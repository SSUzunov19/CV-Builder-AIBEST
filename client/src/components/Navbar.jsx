import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }

return (
    <nav>
        <div>
            <button onClick={routeChange} className='navButtonLeft'>buildMe</button>
        </div>
    </nav>
    );
}
export default Navbar;