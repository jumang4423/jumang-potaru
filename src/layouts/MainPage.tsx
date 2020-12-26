import React from 'react';
import MDArea from "@/components/MDArea"
import "@/styles/layout/MainPage.scss";

const RotateJumang = React.lazy(() =>
    import("@/components/RotateJumang")
)

//basically this <Apps /> for only jsx components
const MainPage = (props) => {
    const isSSR = typeof window === "undefined"

    return (
        <div className="MainPage">
            {!isSSR &&
                <React.Suspense fallback={<div />}>
                    <RotateJumang />
                </React.Suspense>
            }
            <>
                <MDArea page={props.page} />
            </>
        </div>
    );
};

export default MainPage