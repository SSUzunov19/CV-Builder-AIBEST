import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import "./Title.css"

export default function Title({userId}) {
    const navigate = useNavigate();

    const heroTextAnimate = {
        hidden: {
            scale: 0.8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.2
            }
        }
    }

    return (
        <div className="title-wrapper">
            <div className="text-container">
                <motion.p
                    className="page-title"
                    initial="hidden"
                    animate="visible"
                    variants={heroTextAnimate}
                >
                    Build <span className="gradient-text">Professional Resume</span> Fast And Stress Free
                </motion.p>
            </div>
            {userId != "null" && userId != null ? (
                <button className="title-btn" onClick={() => navigate('/dashboard')}>Get Started Now</button>
            ) : (
                <button className="title-btn" onClick={() => navigate('/register')}>Get Started Now</button>
            )}

        </div>
    );
}