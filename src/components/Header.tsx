import React from 'react';
import HeaderFoot from "@/components/HeaderFoot"
import HeaderThings from "@/components/HeaderThings"
import { motion } from "framer-motion";
import "@/styles/component/Header.scss";

export default function Header(props) {
    return (
        <motion.div 
        className="Header"
        initial={{opacity: 0}}
        animate={{opacity: 1}}>
            <HeaderFoot pageName={props.pageName}/>
            <HeaderThings />
        </motion.div>
    )
}
