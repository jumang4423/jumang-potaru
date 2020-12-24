import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import 'lazysizes'
import "@/styles/component/Notification.scss";

const Notification = () => {
    //notification flag
    const [notiFlag, setNotiFlag] = useState(true);
    const [src, setSrc] = useState("");
    const src_data = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/745415452&color=%44ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
    if (typeof window !== `undefined`) {
        window.setTimeout(function () {
            setSrc(src_data)
        }, 250);
    }
    const exitText = (
        <motion.div
            key={3}
            className="latestSong"
            style={
                { rotate: 0, color: '#777777' }}
            initial={
                { opacity: 0.5, y: 50, scale: 0, rotate: 0 }}
            animate={
                { opacity: 1, y: 0, scale: 1, rotate: 0 }}
            whileHover={
                { color: '#d3d3d3c0' }}
            exit={
                { opacity: 0, scale: 0.1, transition: { duration: 0.2 } }}
            onClick={
                () => setNotiFlag(false)}
            whileTap={
                {
                    scale: 0.99
                }
            }>
            ✖
        </motion.div>
    );
    const nortArea = (
        <motion.li
            className="ntf_li"
            key={0}
            initial={
                { opacity: 0, y: 100, scale: 0 }}
            animate={
                { opacity: 0.8, y: 0, scale: 1 }}
            whileHover={
                { scale: 1.05, opacity: 1 }}
            exit={
                { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
            {
                <iframe
                    loading="lazy"
                    title="soundcloud link"
                    key={1}
                    frameBorder="no"
                    scrolling="no"
                    src={src} >
                    
                </iframe>
            } </motion.li>
    );


    return (
        <div className="Notification" >
            <ul className="ntf">
                <AnimatePresence initial={true} >
                    {notiFlag && exitText}
                    {notiFlag && nortArea}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default Notification;