import React from 'react';
import { graphql　} from "gatsby"
import RotateJumang from "@/components/RotateJumang"
import Header from "@/components/Header"
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
export default function MainPage() {
    const text = "test"
    return (
        <div className="MainPage">

            <div>
                { isWebGLAvailable() ? <RotateJumang /> : <p id="webglError"></p>}
            </div>
            <MDArea text={text} />
            <Header />

        </div>
    );
};

// export const query = graphql`
// query {
//     allMicrocmsBlog(filter: {}) {
//         edges {
//             node {
//                 title
//                 contents
//             }
//         }
//     }
//   }
// `;