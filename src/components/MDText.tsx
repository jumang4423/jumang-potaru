import React from 'react';
import MPPost from "@/components/MPPost"
import "@/styles/component/MDText.scss";

const MDText = (props) => {
    return (
        <div className="MDText" >
            <MPPost page={props.page} />
        </div>
    )
}

export default MDText