import React from 'react';
import { motion } from "framer-motion";
import "@/styles/component/cutieButton.scss"

interface Props {
    Name: string,
}

const CutieButton: React.FC<Props> = ({ Name }) => {

    return (
        <motion.div
            className={`cute-item`}
            initial={
                {
                    opacity: 0.0,
                    backgroundColor: 'rgba(255, 100, 0, 0)',
                    color: 'rgba(50, 50, 50, 0.9)'
                }}
            animate={
                {
                    opacity: 1,
                    backgroundColor: 'rgba(200, 200, 200, 0.3)'
                }}
            whileHover={
                {
                    scale: 1.06,
                    backgroundColor: 'rgba(200, 200, 200, 0.4)',
                }}
            whileTap={
                {
                    scale: 0.96,
                    backgroundColor: 'rgba(230, 230, 200, 0.6)'
                }}
            onClick={
                () => { }
            }>
            <div className="cuteText">
                {Name}
            </div>
        </motion.div>
    )
}

export default CutieButton