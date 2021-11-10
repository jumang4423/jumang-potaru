import React from 'react';
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"
import "@/styles/component/HeaderFoot.scss";

interface Props {
}

const HeaderFoot = ({ }: Props) => {

    let location: string = ((): string => {
        switch (useLocation().pathname) {
            case "/":
                return "ジーマンポータル"
            case "/projects":
                return "projects"
            case "/about":
                return "about"
            case "/backwash":
                return "backwash"
            case "/morenysh":
                return "about nysh"
            case "/nysh":
                return "nysh"
            case "/su_sudo":
                return "su_sudo"
            default:
                return "404"
        }
    })()

    return (
        <Link to="/" className="HeaderFoot">
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
                    <div className="potaruText1 Jet flex-row">
                        JUMANG POTARU
                        <div className={"rotate"}><div className={"centering"}>☯</div></div>
                        <span className="DPGreen">{location}</span>
                    </div>
                </motion.div>
            </div>
        </Link>
    )
}

export default HeaderFoot