import React from 'react';
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { motion } from "framer-motion"
import "@/styles/component/HeaderFoot.scss";

interface Props {
}

const HeaderFoot = ({ }: Props) => {

    const path: string = useLocation().pathname
    let location: string = ""
    switch (path) {
        case "/":
            location = "ジーマンポータル"
            break
        case "/projects":
            location = "projects"
            break
        case "/about":
            location = "about"
            break
        case "/backwash":
            location = "backwash"
            break
        case "/morenysh":
            location = "about nysh"
            break
        case "/nysh":
            location = "nysh"
            break
        default:
            location = "404"
            break
    }

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