import React from 'react';
import { motion } from "framer-motion";
import MDText from "@/components/MDText"
import "@/styles/component/MDArea.scss";


export default function MDArea(props) {
    return (
        <div>
            <motion.div
                className="MDArea"
                drag
                dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}>
                <div className="MDArea2">
                    <MDText text={props.text} />
                </div>
            </motion.div>
        </div>
    )
}