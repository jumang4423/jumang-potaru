import React from 'react';
import MDText from "@/components/MDText"
import "@/styles/component/MDArea.scss";


export default function MDArea(props) {
    return (
        <div className="MDArea">
            <div className="MDArea2">
                <MDText text={props.text}/>
            </div>
        </div>
    )
}