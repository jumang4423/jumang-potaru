import React, { useState } from 'react';
import Header from "@/layouts/Header"
import MainArticles from "@/layouts/MainArticles"
import Notification from "@/components/Notification"
import RotateJumang from "@/components/RotateJumang"
import Forest from "@/components/Forest"
import "@/styles/layout/MainApp.scss";

//when the browser webGL is disabled, normally all components r hidden somehow
//this function for escaping the problem
function isWebGLAvailable() {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {

        return false;

    }

}

//basically this <Apps /> for only jsx components
export default function Apps() {
    const [Frst, useFrst] = useState(true);

    return (
        <div>
            <Header />
            {Frst && <Forest />}
            { isWebGLAvailable() ? <RotateJumang /> : <p id="webglError"></p>}
            <div className="NotificationWrapper">
                <Notification />
            </div>
            <MainArticles
                useFrst={useFrst}
                Frst={Frst} />
        </div>
    );
};