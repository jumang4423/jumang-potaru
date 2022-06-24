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
import scene_0007 from "./scene_0007/web3";
import scene_0008 from "./scene_0008/forest";

const ArtNodes = {
  1: {
    name: "welcome",
    sketch: scene_0001,
    bgm: ["/scene_0001/no.mp3",],
    author: 'jumango'
  },
  2: {
    name: "dog_scream_with_skrillex_song",
    sketch: scene_0002,
    bgm: ["/scene_0002/corn_dog_skrillex.mp3", "/scene_0002/sad.mp3"],
    author: 'jumango'
  },
  3: {
    name: "flower_mind_trash",
    sketch: scene_0003,
    bgm: ["/scene_0003/me.mp3"],
    author: "jumango"
  },
  4: {
    name: "old_days",
    sketch: scene_0004,
    bgm: ["/scene_0004/old_days.mp3"],
    author: "jumango"
  },
  5: {
    name: "viwiv wip",
    sketch: undefined,
    bgm: [''],
    author: "viwiv"
  },
  6: {
    name: "nerding_makes_me_so_boring",
    sketch: scene_0006,
    bgm: ["/scene_0006/nerding_makes_me_so_boring.mp3"],
    author: "jumango"
  },
  7: {
    name: "web3",
    sketch: scene_0007,
    bgm: ["/scene_0007/web3.mp3"],
    author: "jumango"
  },
  8: {
    name: "forest",
    sketch: scene_0008,
    bgm: ["/scene_0008/forest.mp3"],
    author: 'jumango'
  }
}

const Psynet3MainComponent = () => {
  const [sketchId, setSketchId] = React.useState<number>(undefined)
  const [bgmId, setBgmId] = React.useState<string>("");

  // watch local storage for changes sketchId
  useEffect(() => {
    localStorage.setItem("currentSketchId", String(1));

    // やりかた汚すぎて草
    let bgmId_var = ""
    const id = setInterval(() => {
      const currentSketchIdFromLocalStorage = localStorage.getItem("currentSketchId");
      const currentBgmIndexFromLocalStorage = localStorage.getItem("currentBgmIndex");


      if (currentSketchIdFromLocalStorage === null) {
        setSketchId(1);
        localStorage.setItem("currentSketchId", String(1));
        localStorage.setItem("currentBgmIndex", String(0));
        return;
      }

      if (bgmId_var === ArtNodes[currentSketchIdFromLocalStorage].bgm[currentBgmIndexFromLocalStorage]) {
        return;
      }

      setSketchId(parseInt(currentSketchIdFromLocalStorage));
      const newBgmId = ArtNodes[currentSketchIdFromLocalStorage].bgm[currentBgmIndexFromLocalStorage];
      setBgmId( newBgmId );
      bgmId_var = newBgmId;
    }, 100);

    return () => {
      clearInterval(id);
    }
  }, []);


  if (!sketchId) {
    return <div/>;
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
              sketchId !== 1 &&
                <div
                    onClick={() => {
                      setSketchId(1);
                      localStorage.setItem("currentSketchId", String(1));
                    }}
                    style={
                      {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: "4px",

                        backgroundColor: "#aaa",
                        width: "100%",
                        height: "24px",
                      }}>
                    <div style={{
                      left: 8,
                      textDecoration: 'underline',
                      color: "#aaf",
                      backgroundColor: "#fff"
                    }}>{"<- back to main page"}</div>
                    <div style={{
                      right: 8,
                      textDecoration: 'none',
                      color: '#fff'
                    }}>{"this art node creator: " + ArtNodes[sketchId].author}</div>
                </div>
            }

            <div style={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              margin: '0px 5px 0px 5px',
            }}><ReactP5Wrapper sketch={ArtNodes[sketchId].sketch}/></div>


          </div>
        </div>
      </div>
    </div>
  )

}

export default Psynet3MainComponent;
