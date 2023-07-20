import React from "react"
import templatePreview from "../../../images/preview/templatePreview.jpg"
import "./Product Details.css"

export default function ProductDetails() {
    return (
        <div className="product-details-wrapper">
            <div className="product-details-container">
                <div className="details-text-container">
                    <p className="details-title">What's our goal?</p>
                    <p className="details-desc">
                        The aim of this project is to assist users in creating 
                        a professional CV, making it effortless to secure employment. 
                        To accomplish this, we leverage APIs from Grammarly and OpenAI.
                    </p>
                    <button className="title-btn">Start Now</button>
                </div>
                <img src={templatePreview} alt="This couldn't load" className="template-preview"></img>
            </div>
        </div>
    );
}