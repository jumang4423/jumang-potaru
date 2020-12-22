import React from 'react';
import { motion } from "framer-motion";

//button components that moves really fluent
export default function MainArticlesButton(props) {
return(
        <motion.div
        key={props.id}
        className="artHeader"
        initial={
        { 
            opacity: 0.0,
            scale: 0,
            backgroundColor: 'rgba(255, 100, 0, 0)',
            color: 'rgba(50, 50, 50, 0.9)' }}
        animate={
        { 
            opacity: 1,
            scale: 1,
            backgroundColor: 'rgba(200, 200, 200, 0.0)' }}
        whileHover={
        { 
            backgroundColor: 'rgba(200, 200, 200, 0.4)',
            scale: 1.1,
            color: 'rgba(50, 50, 50, 1)' }}
        whileTap={
        {
            scale: 0.96,
            backgroundColor: 'rgba(230, 230, 200, 0.6)'
        }}
        onClick={
        () => {
            const url = props.href
            window.open(url, '_blank')
            }}>
        {props.name}
        </motion.div>
    );
};