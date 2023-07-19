import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./homepage.css";

const HomePage = () => {
  const footerStyle = {
    position: "relative",
    width: "100%",
    height: "60px",
    top: "1400px",
    overflow: "hidden",
  };
  return (
    <div className="HomepageBody">

      <Navbar></Navbar>
      <div className="first-section">
        <div className="firstSectionTextPH">
          <p className="firstSectionText1">
            Build <span>Professional Resume</span> <br /> Fast And Stress Free
          </p>
          <p className="firstSectionText2"> </p>
          <button className="Try-Now-BTN">Get Started Now</button>
        </div>
      </div>
      <div className="second-section">
        <p className="secondSectionText1">
          It's so easy, you don't even need to think
        </p>
        <div className="TextBoxWrapper">
          <div className="TextBoxSection2">
            <p className="number">01</p>
            <p className="title">Add Your Info</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
              Modi, quasi? Distinctio optio totam voluptatibus <br /> sed..
            </p>
          </div>
          <div className="TextBoxSection2">
            <p className="number">02</p>
            <p className="title">Select Template</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
              Modi, quasi? Distinctio optio totam voluptatibus <br /> sed..
            </p>
          </div>
          <div className="TextBoxSection2">
            <p className="number">03</p>
            <p className="title">Save PDF</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
              Modi, quasi? Distinctio optio totam voluptatibus <br /> sed..
            </p>
          </div>
        </div>
        <p className="section-2-text-2">
          The faster way to create professional-looking resumes
        </p>
        <img
          src="https://buildmecv.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmac.a668ea7c.png&w=750&q=75"
          alt="This image couldn't load"
        />
      </div>
      <div className="third-section">
        <div className="section-3-Wrapper">
          <div className="TextBoxWrapper-2">
            <p className="title">There's a resume for every profession</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicingelit. <br />
              Odio magnam vitae voluptas distinctio <br />
              numquamin hic error sint consequuntur maxime?
            </p>
            <button>Create Resume</button>
          </div>
          <div className="TextBoxWrapper-3">
            <img src="" alt="This image couldn't load" />
          </div>
        </div>
      </div>

      <div className="fifth-section">
        <div className="TextBoxWrapper-5">
          <p className="section-5-header">
            Create <span>professional resumes</span> with buildMe
          </p>
          <p className="section-5-text">Get started now. It's free</p>
          <button className="section-5-button">Create Resume</button>
        </div>
      </div>

      <Footer style={footerStyle}></Footer>
    </div>
  );
};

export default HomePage;
