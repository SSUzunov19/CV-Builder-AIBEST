import React from "react";
import "./Summary.css"

export default function Summary() {
    return (
        <div className="summary-wrapper">
            <div className="summary-container">
                <p className="summary-title">
                    Create <span className="gradient-text">professional resumes</span> with Wonder Woman
                </p>
                <p className="summary-subtext">Get started now. It's free</p>
                <button className="title-btn">Create Resume</button>
            </div>
        </div>
    );
}