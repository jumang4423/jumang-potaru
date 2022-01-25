import React from 'react'
import MDArea from "@/components/MDArea"
import SoundCloudArea from "@/components/SoundCloudArea"
import "@/styles/layout/MainPage.scss"
import { useLocation } from '@reach/router'
import GoDownMan from '@/components/GoDownMan'
import { useState } from 'react'
import NyshWindow from '@/components/NyshWindow'
import { Su_Sudo } from '@/components/Su_Sudo'

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    const path: string = useLocation().pathname
    const [openNysh, setOpenNysh] = useState<boolean>(true)

    // useMemo thing
    const MemoedSoundCLoudArea = React.memo(() => {
        return <SoundCloudArea />
    })

    if (path === "/su_sudo") {
        return (
            <div className={"upput"}>
                <Su_Sudo />
            </div>
        )
    }

    return (
        <div className={"upput"}>
            {
                path === "/" && openNysh &&
                <NyshWindow setIsNysh={setOpenNysh} />
            }

            {
                ((path === "/" && !openNysh) || path !== "/") &&
                <MDArea setIsNysh={setOpenNysh} />
            }

            {
                path === "/projects" &&
                <MemoedSoundCLoudArea />
            }
            
        </div>
    );
};

export default MainPage