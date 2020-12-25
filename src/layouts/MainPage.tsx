import React from 'react';
import RotateJumang from "@/components/RotateJumang"
import MDArea from "@/components/MDArea"
import "@/styles/layout/MainPage.scss";

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
const MainPage = (props) => {

    return (
        <div className="MainPage"
            style={{ height: props.height + "px" }}>
            <div>
                {isWebGLAvailable() ? <RotateJumang /> : <p id="webglError"></p>}
            </div>
            <MDArea page={props.page} />
        </div>
    );
};

export default MainPage