import React from 'react'
import "@/styles/layout/MainPage.scss"
import {useLocation} from '@reach/router'
import NyshWindow from '@/components/NyshWindow'
import MeText from "@/components/MeText";
import SocialText from "@/components/SocialText";
import MindText from "@/components/MindText";

//basically this <Apps /> for only jsx components
const MainPage: React.FC<any> = () => {

  const path: string = useLocation().pathname

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      {
        path === "/" &&
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
        path === "/me" && <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}><MeText/></div>
      }

      {
        path === "/contacts" && <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}><SocialText/></div>
      }

      {
        path === "/mind" && <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}><MindText/></div>
      }

    </div>
  );
};

export default MainPage
