import React from 'react';
import HeaderFoot from "@/components/HeaderFoot"
import HeaderThings from "@/components/HeaderThings"
import { motion } from "framer-motion";
import "@/styles/component/Header.scss";

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <div className="Header">
            <HeaderFoot />
            <HeaderThings />
        </div>
    )
}

export default Header