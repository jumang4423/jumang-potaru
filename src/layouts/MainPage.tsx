import React from 'react'
import MDArea from "@/components/MDArea"
import SoundCloudArea from "@/components/SoundCloudArea"
import "@/styles/layout/MainPage.scss"
import { Link, useLocation } from '@reach/router'
import GoDownMan from '@/components/GoDownMan'
import { motion } from 'framer-motion'
import SpecialButton from '@/components/SpecialButton'
import { useState } from 'react'
import { useEffect } from 'react'
import NyshWindow from '@/components/NyshWindow'

export const AddNysh = (props) => {

    const [blinker, setBlincker] = useState<boolean>(false)

    // useEffects
    useEffect(() => {

        setTimeout(() => {
            setBlincker(!blinker)
        }, 500);

    }, [blinker])

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
            className="MDArea-sc2 pointme 'a-remove'"
            onClick={() => props.setOpenNysh(true)} >
                <div
                    className="MDArea2 'a-remove'"
                    onClick={() => {
                        props.setIsNysh(true)
                    }}>
                    <SpecialButton Name={`+ launch nysh`} />
                </div>
            </motion.div >
    )
}

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    const path: string = useLocation().pathname
    const [openNysh, setOpenNysh] = useState<boolean>(false)

    return (
        <>
            {
                path === "/" && !openNysh &&
                <div
                    className={"centering"}
                >
                    <AddNysh setOpenNysh={setOpenNysh} />
                </div>
            }

            {
                path === "/" && openNysh &&
                <NyshWindow path="/nysh" />
            }

            <MDArea />

            {
                path === "/projects" &&
                <SoundCloudArea />
            }

            <GoDownMan />
        </>
    );
};

export default MainPage