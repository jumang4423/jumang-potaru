import React from 'react';
import HeaderFoot from "@/components/HeaderFoot"
import HeaderThings from "@/components/HeaderThings"
import { motion } from "framer-motion";
import "@/styles/component/Header.scss";

export default function Header() {
    return (
        <motion.div 
        className="Header"
        initial={{opacity: 0}}
        animate={{opacity: 1}}>
            <HeaderFoot />
            <HeaderThings />
        </motion.div>
    )
}
