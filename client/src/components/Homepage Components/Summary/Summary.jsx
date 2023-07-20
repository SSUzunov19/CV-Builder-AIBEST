import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Summary.css"

export default function Summary({ userId }) {
    const navigate = useNavigate();

    return (
        <div className="summary-wrapper">
            <div className="summary-container">
                <p className="summary-title">
                    Create <span className="gradient-text">professional resumes</span> with Wonder Woman
                </p>
                <p className="summary-subtext">Get started now. It's free</p>
                {userId != "null" && userId != null ? (
                    <button className="title-btn" onClick={() => navigate('/dashboard')}>Create Resume</button>
                ) : (
                    <button className="title-btn" onClick={() => navigate('/register')}>Create Resume</button>
                )}
            </div>
        </div>
    );
}