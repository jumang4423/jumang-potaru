import React from 'react'
import MDText from "@/components/MDText"
import "@/styles/component/MDArea.scss"

interface Props {
}

const MDArea: React.FC<Props> = () => {
    return (
        <div className="MDArea">
            <div className="MDArea2">
                <MDText />
            </div>
        </div>
    )
}

export default MDArea