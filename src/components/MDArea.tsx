import React from 'react'
import MDText from "@/components/MDText"
import "@/styles/component/MDArea.scss"
import CutieButton from './CutieButton'
import "@/styles/component/cutieButton.scss"

interface Props {
    setIsNysh: Function
}

const MDArea: React.FC<Props> = ({ setIsNysh }: Props) => {
    return (
        <div className="MDArea">
            <div className="MDArea2">
                <MDText setIsNysh={setIsNysh}/>
            </div>
        </div>
    )
}

export default MDArea