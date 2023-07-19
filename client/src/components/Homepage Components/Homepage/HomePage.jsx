import React from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import Features from "../Features/Features"
import ProductPreview from "../Product Preview/Product Preview";
import ProductDetails from "../Product Details/Product Details";
import Footer from "../Footer/Footer";
import "./Homepage.css";

const HomePage = ({userId, setUserId, userName, setUserName}) => {
  const footerStyle = {
    position: "relative",
    width: "100%",
    height: "60px",
    top: "1400px",
    overflow: "hidden",
  };
  return (
    <Layout>

      <Navbar userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName}/>

      <Title />

      <Features/>

      <ProductPreview/>

      <ProductDetails />

      {/* <div className="third-section">
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
      </div> */}

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
    </Layout>
  );
};

export default HomePage;
