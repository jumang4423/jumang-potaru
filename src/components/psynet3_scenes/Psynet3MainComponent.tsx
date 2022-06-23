import React, {useEffect, useState} from "react";
import TextBuwa from "@/components/TextBuwa";
import {ReactP5Wrapper} from "react-p5-wrapper";
import ReactPlayer from "react-player";

// sketches
import scene_0001 from "./scene_0001/welcome";
import scene_0002 from "./scene_0002/dog_scream_with_skrillex_song";

enum PsychenetScene {
  welcome = 1,
  dog_scream_with_skrillex_song = 2,
}

const AllSketches = {
  1: scene_0001,
  2: scene_0002,
}

const BGM = {
  1: undefined,
  2: "/scene_0002/corn_dog_skrillex.mp3",
}


const Psynet3MainComponent = () => {
  const [sketchId, setSketchId] = React.useState<PsychenetScene>(undefined);
  const [bgmId, setBgmId] = React.useState<string>("");

  // watch local storage for changes sketchId
  useEffect(() => {
    localStorage.setItem("currentSketchId", String(PsychenetScene.welcome));

    // やりかた汚すぎて草
    const id = setInterval(() => {
      const currentSketchIdFromLocalStorage = localStorage.getItem("currentSketchId");
      if (currentSketchIdFromLocalStorage) {
        setSketchId(parseInt(currentSketchIdFromLocalStorage));
        // setBGM
        const bgm = BGM[parseInt(currentSketchIdFromLocalStorage)];

        if (bgm) {
          setBgmId(bgm);
        }


      } else {
        setSketchId(PsychenetScene.welcome);
        localStorage.setItem("currentSketchId", String(PsychenetScene.welcome));
      }
    }, 100);

    return () => {
      clearInterval(id);
    }
  }, []);


  if (!sketchId) {
    return <div></div>;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "960px",
      width: "100%",
      backgroundColor: "#f0f0f0",
      margin: "4px",
      borderRadius: "2px",
    }}>

      <div style={{
        width: "960px",
        fontSize: `16px`,
        fontWeight: `normal`,
        // use menlo
        fontFamily: `"Iosevka Web", monospace`,
      }}>
        <div className={"nysh_back what_the"} style={{}}>

          <div style={{
            color: "#fff",
            borderRadius: '5px',
            margin: '5px',
          }}>
            <p style={{
              width: "auto",
              backgroundImage: `linear-gradient(90deg, rgba(114,156,90,1) 0%, rgba(164,164,164,1) 100%)`,
              fontSize: "17px",
              opacity: 0.5,
            }}><TextBuwa text={'= psychenet | the mind explorer'}/></p>

            {
              bgmId &&
                <ReactPlayer
                    url={bgmId}
                    playing={true}
                    loop={true}
                    hidden
                />
            }

            <div style={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              margin: '0px 5px 0px 5px',
            }}><ReactP5Wrapper sketch={AllSketches[sketchId]}/></div>


          </div>
        </div>
      </div>
    </div>
  )

}

export default Psynet3MainComponent;
