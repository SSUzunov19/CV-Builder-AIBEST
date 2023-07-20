import React from "react";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import Features from "../Features/Features"
import ProductPreview from "../Product Preview/Product Preview";
import ProductDetails from "../Product Details/Product Details";
import Summary from "../Summary/Summary";
import Footer from "../Footer/Footer";
import "./Homepage.css";

const HomePage = ({userId, setUserId, userName, setUserName, setTemplateId}) => {
  setTemplateId(null)

  return (
    <Layout>

      <Navbar userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName}/>

      <Title />

      <Features/>

      <ProductPreview/>

      <ProductDetails />

      <Summary />

      <Footer/>
    </Layout>
  );
};

export default HomePage;
