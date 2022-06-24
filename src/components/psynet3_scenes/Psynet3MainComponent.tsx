import React, {useEffect} from "react";
import TextBuwa from "@/components/TextBuwa";
import {ReactP5Wrapper} from "react-p5-wrapper";
import ReactPlayer from "react-player";

// sketches
import scene_0001 from "./scene_0001/welcome";
import scene_0002 from "./scene_0002/dog_scream_with_skrillex_song";
import scene_0003 from "./scene_0003/flower_mind_trash";
import scene_0004 from "./scene_0004/old_days";
import scene_0006 from "./scene_0006/nerding_makes_me_so_boring";

enum PsychenetScene {
  welcome = 1,
  dog_scream_with_skrillex_song = 2,
  flower_mind_trash = 3,
  old_days = 4,
  nerding_makes_me_so_boring = 6,
}

const AllSketches = {
  1: scene_0001,
  2: scene_0002,
  3: scene_0003,
  4: scene_0004,
  6: scene_0006,
}

const BGM = {
  1: "/scene_0001/no.mp3",
  2: "/scene_0002/corn_dog_skrillex.mp3",
  3: "/scene_0003/me.mp3",
  4: "/scene_0004/old_days.mp3",
  6: "/scene_0006/nerding_makes_me_so_boring.mp3",
}


const Psynet3MainComponent = () => {
  const [sketchId, setSketchId] = React.useState<PsychenetScene>(undefined);
  const [bgmId, setBgmId] = React.useState<string>("");

  // watch local storage for changes sketchId
  useEffect(() => {
    // localStorage.setItem("currentSketchId", String(PsychenetScene.welcome));

    // やりかた汚すぎて草
    let bgmId_var = ""
    const id = setInterval(() => {
      const currentSketchIdFromLocalStorage = localStorage.getItem("currentSketchId");

      if (bgmId_var === BGM[currentSketchIdFromLocalStorage]) {
        return;
      }

      if (currentSketchIdFromLocalStorage) {
        setSketchId(parseInt(currentSketchIdFromLocalStorage));

        setBgmId( BGM[parseInt(currentSketchIdFromLocalStorage)] );
        bgmId_var = BGM[parseInt(currentSketchIdFromLocalStorage)]

      } else {
        setSketchId(PsychenetScene.welcome);
        localStorage.setItem("currentSketchId", String(PsychenetScene.welcome));
      }
    }, 1);

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

      <div key={bgmId}><ReactPlayer
        url={bgmId}
        playing={true}
        loop={true}
        hidden
      /></div>

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
            }}><TextBuwa text={'= psychenet | the mind node based internet'}/></p>

            {
              sketchId !== PsychenetScene.welcome &&
                <div
                    onClick={() => {
                      setSketchId(PsychenetScene.welcome);
                      localStorage.setItem("currentSketchId", String(PsychenetScene.welcome));
                    }}
                    style={
                      {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "#aaa",
                        width: "100%",
                        height: "24px",
                        textDecoration: 'underline',
                      }}>
                  {"<- back to main page"}
                </div>
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
