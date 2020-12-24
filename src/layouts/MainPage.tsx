import React from 'react';
import { graphql, useStaticQuery　} from "gatsby"
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
export default function MainPage (data) {
    const text : Object = JSON.stringify(data, null, 4)
    
    const MPPost = () => {
        return (
            <div>
                {text}
            </div>
        )
    }

    // const body : string = "<div>test</div>"
    // const MPPost: React.FC<{ body: string }> = ({ body }) => (
    //     <div dangerouslySetInnerHTML={{ __html: body }} />
    // )
    return (
        <div className="MainPage">

            <div>
                { isWebGLAvailable() ? <RotateJumang /> : <p id="webglError"></p>}
            </div>
            <MDArea MPPost={MPPost} />
            <Header />
        </div>
    );
};

export const query = graphql`
  {
    allMicrocmsPotaruCms {
      nodes {
        title
      }
    }
  }
`