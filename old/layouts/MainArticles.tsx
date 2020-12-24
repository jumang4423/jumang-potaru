import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MainArticlesButton from "@/components/MainArticlesButton"
import ForestButton from "@/components/ForestButton"
import "@/styles/layout/MainArticles.scss";

export default function MainArticles(props) {
    return (
    <div className="menu">
        {/* the kewl line using hr */}
        <motion.hr 
            key={7}
            className="slant-line"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        ></motion.hr>
        <ul className="artUL">
        
        {/* some buttons */}

        <AnimatePresence initial={true} >
            <MainArticlesButton
            key={0}
            id={4}
            name='soundcloud'
            href='https://soundcloud.com/jumanjixxx'/>

            <MainArticlesButton
            key={1}
            id={5}
            name='github'
            href='https://github.com/jumang4423'/>

            <MainArticlesButton
            key={2}
            id={6}
            name='twitter'
            href='https://twitter.com/jumang4423'/>

            <ForestButton
            key={3}
            id={7}
            name='particles'
            useFrst={props.useFrst}
            Frst={props.Frst}/>
        </AnimatePresence>
        
    </ul>
    </div>
  );
};