import React from 'react';
import { motion } from "framer-motion";
import MDText from "@/components/MDText"
import MDPicture from "@/components/MDPicture"
import "@/styles/component/MDArea.scss";

const MDArea = () => {
    return (
        <>
            <motion.div
                className="MDArea"
                drag
                dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
                animate={
                    {
                        scale: 1.0,
                        background: "#FFFFFF"
                    }}
                whileTap={
                    {
                        scale: 1.02,
                    }}>
                <div className="MDArea2">
                    <MDText />
                    {/* <MDPicture /> */}
                </div>
            </motion.div>
        </>
    )
}

export default MDArea