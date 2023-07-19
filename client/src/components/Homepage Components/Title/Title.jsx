import React from "react"
import { motion } from "framer-motion"
import "./title.css"

export default function Title() {
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
                    Build <span id="gradient-text">Professional Resume</span> Fast And Stress Free
                </motion.p>
            </div>
            <button className="title-bth">Get Started Now</button>
        </div>
    );
}