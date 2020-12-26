import React from 'react';
import RotateJumang from "@/components/RotateJumang"
import MDArea from "@/components/MDArea"
import "@/styles/layout/MainPage.scss";

//basically this <Apps /> for only jsx components
const MainPage = (props) => {

    return (
        <div className="MainPage">
            <RotateJumang />
            <>
                <MDArea page={props.page} />
            </>
        </div>
    );
};

export default MainPage