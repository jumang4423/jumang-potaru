import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import "@/styles/component/HeaderFoot.scss";

type Props = {

}

const HeaderFoot: React.FC<Props> = () => {

    return (
        <div className="potaru">
            <motion.div
                className="potaruText1Rec"
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
                    () => {
                        scrollTo(0, 0)
                    }
                }>
                <div className="potaruText1 Jet">
                    JUMANG POTARU ☯ <span className="DPGreen">ジュマンポータル</span>
                </div>
            </motion.div>
        </div>
    )
}

export default HeaderFoot