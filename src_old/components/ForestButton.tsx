import React from 'react';
import { motion } from "framer-motion";

//button components that moves really fluent
export default function ForestButton(props) {
    if (props.Frst) return(
        <motion.div
        key={props.id}
        className="artHeader"
        initial={
        { 
            opacity: 0.0,
            scale: 0,
            backgroundColor: 'rgba(255, 100, 0, 0)',
            color: 'rgba(50, 50, 50, 0.8)' }}
        animate={
        { 
            opacity: 1,
            scale: 1,
            backgroundColor: 'rgba(200, 255, 200, 0.5)' }}
        whileHover={
        { 
            backgroundColor: 'rgba(100, 255, 100, 0.4)',
            scale: 1.1,
            color: 'rgba(50, 50, 50, 1)' }}
        whileTap={
        {
            scale: 0.96,
            backgroundColor: 'rgba(230, 230, 200, 0.6)'
        }}
        onClick={
        () =>  props.useFrst(!props.Frst)}>
            {props.name}: {props.Frst ? 'on' : 'off'}
        </motion.div>
    );
    else return(
        <motion.div
        key={props.id}
        className="artHeader"
        initial={
        { 
            opacity: 0.0,
            scale: 0,
            backgroundColor: 'rgba(255, 100, 0, 0)',
            color: 'rgba(50, 50, 50, 0.8)' }}
        animate={
        { 
            opacity: 1,
            scale: 1,
            backgroundColor: 'rgba(220, 220, 220, 0.5)' }}
        whileHover={
        { 
            backgroundColor: 'rgba(200, 200, 200, 0.6)',
            scale: 1.1,
            color: 'rgba(50, 50, 50, 1)' }}
        whileTap={
        {
            scale: 0.96,
            backgroundColor: 'rgba(230, 230, 200, 0.6)'
        }}
        onClick={
        () =>  props.useFrst(!props.Frst)}>
            {props.name}: {props.Frst ? 'on' : 'off'}
        </motion.div>
    );
};