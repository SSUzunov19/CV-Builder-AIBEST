import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomePage = () => {
  let navigate = useNavigate();

  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  return (
    <div className='Body'>
     
      <Navbar></Navbar>
     <div className='first-section'>
      <div className="firstSectionTextPH">
     <p className='firstSectionText1'>Build Professional Resume <br /> Fast And Stress Free</p> 
     <p className='firstSectionText2'> </p>
     <button onClick={routeChange} className='Try-Now-BTN'>Get Started Now</button>
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
     <div className="third-section">

     <div className="section-3-Wrapper">
      <div className="TextBoxWrapper-2">
      <p className="title2">There's a resume for every profession</p>
      <p className="description2">Our resume creator comes with 18 fully customizable templates. You’ll get advice <br /> on which one to pick depending on your industry, seniority level, and the kind of <br /> company you’re applying to.</p>
      <button>Create Resume</button>
      </div>
      <div className="TextBoxWrapper-3">

       <img className="Section3-image" src= "https://cdn.discordapp.com/attachments/832699197685891094/1130156193747316867/image.png" alt= "Section 3" />
          </div>
       </div>
     </div>

     <div className="fourth-section">

<p className='user-comment-title'>What People Say</p>

     <div className="TextBoxWrapper-4">


     <div className="userCommentPH">
       <div className="userComment">
         <p className="name">John Doe</p>
         <p className="occupation">Still Unemployed</p>
         <p className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Odio magnam vitae voluptas distinctio numquam <br /> in hic error sint consequuntur maxime?</p>
       </div>
     </div>

     <div className="userCommentPH">
       <div className="userComment">
         <p className="name">John Doe</p>
         <p className="occupation">Still Unemployed</p>
         <p className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Odio magnam vitae voluptas distinctio numquam <br /> in hic error sint consequuntur maxime?</p>
       </div>
     </div>

     <div className="userCommentPH">
       <div className="userComment">
         <p className="name">John Doe</p>
         <p className="occupation">Still Unemployed</p>
         <p className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Odio magnam vitae voluptas distinctio numquam <br /> in hic error sint consequuntur maxime?</p>
       </div>
     </div>

    </div>
</div>

<div className='fifth-section'>
   
   <div className="TextBoxWrapper-5">


   <p className='section-5-header'>Create professional resumes with buildMe</p>
   <p className="section-5-text">Get started now. It's free</p>
   <button className="section-5-button">Create Resume</button>


   </div>




    </div>

     <Footer className="Footer-div" ></Footer>
    
    </div>
  );
};

export default HomePage;