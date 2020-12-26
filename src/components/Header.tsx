import React from 'react';
import { Link } from "gatsby"
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
            <Link to="/">
                <HeaderFoot />
            </Link >
            <HeaderThings />
        </motion.div>
    )
}

export default Header