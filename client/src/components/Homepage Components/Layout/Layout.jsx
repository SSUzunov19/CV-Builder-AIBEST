import React from "react"
import { motion } from "framer-motion"

export default function Layout({ children }) {
    const slide = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{type: 'tween'}}
            variants={slide}
        >
            {children}
        </motion.main>
    );
}