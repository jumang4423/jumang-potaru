import React from 'react'
import { motion } from "framer-motion"
import "@/styles/component/HeaderButton.scss"

interface Props {
    Name: string,
}

const SpecialButton: React.FC<Props> = ({ Name }) => {

    return (
        <motion.div 
        className="ButtonText2"
        >
            {Name}
        </motion.div>
    )
}

export default SpecialButton