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
     <div className="TextBoxWrapper">
     <div className='TextBoxSection2'>
      <p className="number">01</p>
     <p className="title">Add Your Info</p>
     <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Modi, quasi? Distinctio optio totam voluptatibus <br /> sed..</p>
     </div>
     <div className='TextBoxSection2'>
      <p className="number">02</p>
     <p className="title">Select Template</p>
     <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Modi, quasi? Distinctio optio totam voluptatibus <br /> sed..</p>
     </div>
     <div className='TextBoxSection2'>
      <p className="number">03</p>
     <p className="title">Save PDF</p>
     <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Modi, quasi? Distinctio optio totam voluptatibus <br /> sed..</p>
     </div>
     </div>
     <p className="section-2-text-2">The faster way to create professional-looking resumes</p>
     <img className="Laptop" src="https://buildmecv.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmac.a668ea7c.png&w=750&q=75" alt="This img couldn't load" />
     </div>
     <Footer></Footer>
    
    </div>
  );
};

export default HomePage;