import React from 'react';
import { motion } from "framer-motion";
import "@/styles/component/HeaderButton.scss";

export default function HeaderButton(props) {

    return (
        <motion.div
        className={props.Name}
        initial={
            {
                opacity: 0.0,
                backgroundColor: 'rgba(255, 100, 0, 0)',
                color: 'rgba(50, 50, 50, 0.9)'
            }}
        animate={
            {
                opacity: 1,
                backgroundColor: 'rgba(200, 200, 200, 0.0)'
            }}
        whileHover={
            {
                backgroundColor: 'rgba(200, 200, 200, 0.4)',
                color: 'rgba(50, 50, 50, 1)'
            }}
        whileTap={
            {
                scale: 0.96,
                backgroundColor: 'rgba(230, 230, 200, 0.6)'
            }}
        onClick={
            () => { }
        }>
        <div className="ButtonText1">
            {props.Name}
        </div>
    </motion.div>
    )
}