import React from 'react';
import "@/styles/component/MDText.scss";

export default function MDArea(props) {
    
    return (
        <div className="MDText">
            {props.text}
        </div>
    )
}