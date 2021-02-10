import React from 'react';
import "@/styles/component/MDText.scss";
import '@/styles/component/MPPost.scss';

const MPPost = React.lazy(() =>
    import("@/components/MPPost")
)

const MDText: React.FC<any> = () => {
    const isSSR = typeof window === "undefined"
    return (
        <div className="MDText" >
            {!isSSR &&
                <React.Suspense fallback={<h2 className = "MPPost"> </h2>}>
                    <MPPost />
                </React.Suspense>
            }
        </div>
    )
}

export default MDText