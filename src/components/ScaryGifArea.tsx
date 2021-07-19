import React from 'react';
import "@/styles/component/MDArea.scss";

// const ScaryGif = React.lazy(() => import('./ScaryGif'))

interface Props {
}

const ScaryGifArea: React.FC<Props> = () => {
    return (
        <img className="MDArea-sc" src="/psy.gif" />
    )
}

export default ScaryGifArea