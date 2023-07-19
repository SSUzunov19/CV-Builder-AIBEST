import React from "react"
import templatePreview from "../../../images/preview/templatePreview.jpg"
import "./Product Details.css"

export default function ProductDetails() {
    return (
        <div className="product-details-wrapper">
            <div className="product-details-container">
                <div className="details-text-container">
                    {/*Update the text to match the project functionality*/}
                    <p className="details-title">There&apos;s a resume for every profession</p>
                    <p className="details-desc">
                        Our resume creator comes with 18 fully customizable templates.
                        You&apos;ll get advice on which one to pick depending on your industry,
                        seniority level, and the kind of company you&apos;re applying to.
                    </p>
                    <button className="title-btn">Start Now</button>
                </div>
                <img src={templatePreview} alt="This couldn't load" className="template-preview"></img>
            </div>
        </div>
    );
}