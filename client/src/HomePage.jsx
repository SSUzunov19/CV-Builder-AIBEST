import React from 'react';


const HomePage = () => {
  return (
    <div className='Body'>
    <nav>
     <div>
      <button className='navButtonLeft'>Start Creating</button>
      <button className='navButtonLeft'>Conact Us</button>
      <button className='navButtonRight'>LogIn</button>
      <button className='navButtonRight'>Register</button>
     </div>
     </nav>
     
     <div className='first-section'>
      <div className='firstSectionImagePH'><img src='https://childrenswi.org/-/media/44dde55c823d4b99a7cf0297244b71b6.ashx?h=150&w=150' alt="CV.mp4" /></div>
      <div className="firstSectionTextPH">
     <p className='firstSectionText1'>Build your professional job-winning resume now</p>
     <p className='firstSectionText2'> Create a modern professional resume fast and easy, <br /> using customizable templates.</p>
     <button className='Try-Now-BTN' type='Try Now'>Try Now</button>
      </div>
     </div>
     <div className="second-section">
     <p className='secondSectionText1'>Free templates for your resume</p>
     <p className='secondSectionText2'>choose a free template and customize it to <br />
       your liking quick and easy</p>

      
     </div>
     <footer>
        <div className='Footer'>
            <div className='FooterTextPH'>
                <ul className='footerLinksLeft'>
                <li><a href='#' className='FooterText1'>About us</a></li>
                <li><a href='#' className='FooterText2'>Pricing</a></li>
                <li><a href='#' className='FooterText3'>Privacy Policy</a></li>
                <li><a href='#' className='FooterText4'>Terms of Service</a></li>
                </ul>
                <ul className='footerLinksRight'>
                <li><a href='#' className='FooterText1'>Help</a></li>
                <li><a href='#' className='FooterText2'>Contact Us At:</a></li>
                <li><a href='#' className='FooterText3'>- Example@gmail.com</a></li>
                <li><a href='#' className='FooterText4'>- XXX-XXX-XXX</a></li>
                </ul>
            </div>
        </div>

     </footer>
    </div>
  );
};

export default HomePage;