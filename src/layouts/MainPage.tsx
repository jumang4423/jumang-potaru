import React from 'react'
import "@/styles/layout/MainPage.scss"
import {useLocation} from '@reach/router'
import NyshWindow from '@/components/NyshWindow'
import MeText from "@/components/MeText";

// we need have lazy this since p5 accesses the window object, and gatsby is based on ssg which sucks
const Psynet3MainComponent = React.lazy(() =>
  import("@/components/psynet3_scenes/Psynet3MainComponent")
)


const MainPage: React.FC<any> = () => {
  const path: string = useLocation().pathname
  const isSSR = typeof window === "undefined"
  const viewState = {
    isPathMain: path === "/",
    isPathNysh: path === "/nysh",
    isPathPsynet3: path === "/psychenet",
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {
        viewState.isPathMain && <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}><MeText/></div>
      }

      {
        viewState.isPathNysh &&
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
              <NyshWindow/>
          </div>
      }

      {
        viewState.isPathPsynet3 &&
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            {!isSSR && (
              <React.Suspense fallback={<div/>}>
                <Psynet3MainComponent/>
              </React.Suspense>
            )}
          </div>
      }

    </div>
  );
};

export default MainPage
