import React from 'react';
import MDArea from "@/components/MDArea"
import "@/styles/layout/MainPage.scss";

const RotateJumang = React.lazy(() =>
    import("@/components/RotateJumang")
)

//basically this <Apps /> for only jsx components
const MainPage = () => {
    const isSSR = typeof window === "undefined"

    return (
        <div className="MainPage">
            {!isSSR &&
                <React.Suspense fallback={<div />}>
                    <RotateJumang />
                </React.Suspense>
            }
            <>
                <MDArea />
            </>
        </div>
    );
};

export default MainPage