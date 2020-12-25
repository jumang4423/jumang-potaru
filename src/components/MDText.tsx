import React from 'react';
import MPPost from "@/components/MPPost"
import "@/styles/component/MDText.scss";

export default function MDArea(props) {
    return (
        <div className="MDText" >
            <MPPost page={props.page}/>
        </div>
    )
}