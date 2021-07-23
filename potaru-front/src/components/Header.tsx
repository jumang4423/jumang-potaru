import React from 'react';
import HeaderFoot from "@/components/HeaderFoot"
import HeaderThings from "@/components/HeaderThings"
import ConsoleLog from "@/components/ConsoleLog"
import { motion } from "framer-motion";
import "@/styles/component/Header.scss";

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <motion.div
            className="Header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            {/* <audio 
            src="/background.mp3"
            autoPlay={true}
            loop
            ></audio > */}
            <ConsoleLog />
            <HeaderFoot />
            <HeaderThings />
        </motion.div>
    )
}

export default Header