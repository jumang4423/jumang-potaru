import React from 'react';
import { motion } from "framer-motion";
import MDText from "@/components/MDText"
import MDPicture from "@/components/MDPicture"
import "@/styles/component/MDArea.scss";

const MDArea = (props) => {
    return (
        <>
            <motion.div
                className="MDArea"
                drag
                dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
                animate={
                    {
                        scale: 1.0
                    }}
                whileTap={
                    {
                        scale: 1.05,
                    }}>
                <div className="MDArea2">
                    <MDText page={props.page} />
                    {/* <MDPicture /> */}
                </div>
            </motion.div>
        </>
    )
}

export default MDArea