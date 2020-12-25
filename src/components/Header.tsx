import React from 'react';
import { Link } from 'react-router-dom';
import HeaderFoot from "@/components/HeaderFoot"
import HeaderThings from "@/components/HeaderThings"
import { motion } from "framer-motion";
import "@/styles/component/Header.scss";

export default function Header(props) {
    return (
        <motion.div
            className="Header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <Link to="/">
                <HeaderFoot pageName={props.pageName} />
            </Link>
            <HeaderThings />
        </motion.div>
    )
}
