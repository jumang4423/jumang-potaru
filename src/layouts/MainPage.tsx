import React from 'react';
import MDArea from "@/components/MDArea"
import SoundCloudArea from "@/components/SoundCloudArea"
import "@/styles/layout/MainPage.scss";
import { useLocation } from '@reach/router';

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

    const path: string = useLocation().pathname

    return (
        <>
            {
                path === "/projects" &&
                <SoundCloudArea />
            }
            <MDArea />
        </>
    );
};

export default MainPage