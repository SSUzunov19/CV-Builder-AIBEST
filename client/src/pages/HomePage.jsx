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
     <p className='secondSectionText1'>It's so easy, you don't even need to think</p>

      
     </div>
     <Footer></Footer>
    
    </div>
  );
};

export default HomePage;