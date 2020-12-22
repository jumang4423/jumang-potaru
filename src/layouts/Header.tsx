import React from "react";
import { motion } from "framer-motion";
import "@/styles/layout/Header.scss";

//draw header {title, version}
const Header = () => {
  return (
    <header className='headerRightLeft'>
      {/* left side title */}
      <div className='logo'>
        <motion.span
          initial={
            { opacity: 0, scale: 0 }}
          animate={
            { opacity: 1, scale: 1 }}>
          JUMANG POTARU ☯ ジュマンポータル
        </motion.span>
      </div>
      {/* right side version */}
      <div className='episode'>
        <motion.span
          initial={
            { opacity: 0, scale: 0 }}
          animate={
            { opacity: 1, scale: 1, background: '#EEd3d4c0' }}>
          v0.2
        </motion.span>
      </div>
    </header>
  );
};

export default Header;