import React, { Suspense, useState } from 'react';
import { motion } from "framer-motion";
import "@/styles/component/MDArea.scss";
import { useEffect } from 'react';

const EmbedSC = React.lazy(() => import('./EmbedSC'))

interface Props {
}

const SoundCloudArea: React.FC<Props> = () => {

        // is3d parformance check
        const [is3d, setIs3d] = useState<boolean>(false)

        useEffect(() => {
            setIs3d(localStorage.getItem("is3d") === "true")
        }, [])
    

    return (
        <div className={is3d ? "bdroper" : ""}>
            <motion.div
                className="MDArea-sc"
                drag
                dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}

                transition={{ duration: 0.35 }}
                initial={{ scale: 0.99 }}
                animate={
                    {
                        scale: 1.0,
                        background: "#FFFFFF"

                    }}
                whileTap={
                    {
                        scale: 1.02,
                    }}>
                <div className="MDArea2 MPPost">
                    <Suspense fallback={<></>}>
                        <EmbedSC />
                    </Suspense>
                </div>
            </motion.div>
        </div>
    )
}

export default SoundCloudArea