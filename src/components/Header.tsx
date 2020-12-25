import React from 'react';
import HeaderFoot from "@/components/HeaderFoot"
import HeaderThings from "@/components/HeaderThings"
import { motion } from "framer-motion";
import "@/styles/component/Header.scss";

const Header: React.FC = () => {
    return (
        <motion.div
            className="Header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <a href="/">
                <HeaderFoot />
            </a >
            <HeaderThings />
        </motion.div>
    )
}

export default Header