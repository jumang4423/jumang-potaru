import React, { useState } from 'react'
import MDText from "@/components/MDText"
import "@/styles/component/MDArea.scss"
import "@/styles/component/cutieButton.scss"
import { useEffect } from 'react'

interface Props {
    setIsNysh: Function
}

const MDArea: React.FC<Props> = ({ setIsNysh }: Props) => {

    const [is3d, setIs3d] = useState<boolean>(false)

    useEffect(() => {
        setIs3d(localStorage.getItem("is3d") === "true")
    }, [])

    return (
        <div className={is3d ? "bdroper" : ""}>
            <div className="MDArea">
                <div className="MDArea2">
                    <MDText setIsNysh={setIsNysh} />
                </div>
            </div>
        </div>
    )
}

export default MDArea