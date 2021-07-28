import React from 'react'
import MDArea from "@/components/MDArea"
import SoundCloudArea from "@/components/SoundCloudArea"
import "@/styles/layout/MainPage.scss"
import { useLocation } from '@reach/router'
import GoDownMan from '@/components/GoDownMan'
import NyshWindow from '@/components/NyshWindow'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SpecialButton from '@/components/SpecialButton'

export const AddNysh = (props) => {
    return (
        <motion.div

            transition={{ duration: 0.35 }}
            initial={{ scale: 1.0 }}
            animate={
                {
                    scale: 1.0,
                    background: "#FFFFFF"

                }}

            whileHover={
                {
                    scale: 1.5,
                    background: "#DDFFDD"

                }}
            whileTap={
                {
                    scale: 1.02,
                }}
            className="MDArea-sc2 pointme">
            <div
                className="MDArea2"
                onClick={() => {
                    props.setIsNysh(true)
                }}>
                <SpecialButton Name={"+ open nysh"} />
            </div>
        </motion.div>
    )
}

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    const path: string = useLocation().pathname

    const [isNush, setIsNysh] = useState<boolean>(false)

    return (
        <>
            {
                path === "/projects" &&
                <SoundCloudArea />
            }

            {
                path === "/" && !isNush &&
                <div
                    className={"centering"}
                >
                    <AddNysh setIsNysh={setIsNysh} />
                </div>
            }

            {
                path === "/" && isNush &&
                <NyshWindow setIsNysh={setIsNysh} />
            }
            {!isNush &&
                <>
                    <MDArea />
                    <GoDownMan />
                </>
            }
        </>
    );
};

export default MainPage