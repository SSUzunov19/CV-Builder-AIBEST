import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div className='Body'>
      
     
      <Navbar></Navbar>
     <div className='first-section'>
      <div className="firstSectionTextPH">
     <p className='firstSectionText1'>Build Professional Resume <br /> Fast And Stress Free</p> 
     <p className='firstSectionText2'> </p>
     <button className='Try-Now-BTN'>Get Started Now</button>
      </div>
     </div>
     <div className="second-section">
     <p className='secondSectionText1'>Free templates for your resume</p>
     <p className='secondSectionText2'>choose a free template and customize it to <br />
       your liking quick and easy</p>

      
     </div>
     <Footer></Footer>
    
    </div>
  );
};

export default HomePage;