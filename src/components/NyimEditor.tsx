import React, {useState, useEffect} from "react";
import "../styles/component/nyimEditor.css"

type Props = {
  nyim_contents: string
  setNyim_contents: Function
  nyim_fileName: string
  closeNyim: Function
  save_nyim: Function
}

const functions = {
  loadMdParser: async (setModules: Function) => {
    await import("tiny_md_parser" + "").then(modules => setModules(modules))
  },
  md_renderer: (modules, nyim_contents) => {
    let rendered: string = ""

    try {
      rendered = modules.render_html(nyim_contents)
    } catch {
      return "error: couldnt parse markdown"
    }

    return rendered
  }
}

const NyimEditor = (
  {
    nyim_contents,
    setNyim_contents,
    nyim_fileName,
    closeNyim,
    save_nyim
  }: Props) => {
  const [modules, setModules] = useState<any>(null)
  const viewState = {
    isModulesLoaded: modules !== null
  }

  useEffect(() => {
    // actual wasm loading async
    if (nyim_fileName.includes(".md")) {
      functions.loadMdParser(setModules)
    }
  }, [])

  return (
    <div className={"nyim_background"}>
      <div className={"nyim_hovered"}>
        <div className={"nyim_header"}>
          <div style={{
            color: "#fff",
            borderRadius: '5px',
            margin: '5px',
            opacity: 0.5,
            fontSize: '18px',
          }}>
            <p style={{
              backgroundColor: `#3f5c2d`,
              width: "75%",
              // gradient
              backgroundImage: `linear-gradient(90deg, rgba(134,176,110,1) 0%, rgba(255,255,255,1) 100%)`,
            }}>{`= nyvim - ${nyim_fileName}`}</p>
          </div>
        </div>

        <div className={"place_left"}>
          <button style={{
            backgroundColor: "#f5a1c7",
            borderRadius: "5px",
            margin: "0 0 0 32px",
            padding: "4px 36px 4px 12px",
            fontSize: "18px",
            border: "none",
            color: "#fff",
            textDecoration: "underline",
          }}
                  onClick={() => {
                    save_nyim()
                    closeNyim()
                  }}>
            save
          </button>

          <button style={{
            backgroundColor: "#f5a1c7",
            borderRadius: "5px",
            margin: "0 0 0 32px",
            padding: "4px 36px 4px 12px",
            fontSize: "18px",
            border: "none",
            color: "#fff",
            textDecoration: "underline",
          }}
                  onClick={() => {
                    // TODO: only alert? bruh
                    alert(JSON.stringify(nyim_fileName))
                  }}>
            info
          </button>
        </div>


        <div className={"nyim_hr_wrapper"}>
          <div className={"nyim_hr_is_green"} style={{
            width: "75%",
            backgroundImage: `linear-gradient(90deg, rgba(200,200,200,1) 0%, rgba(255,255,255,1) 100%)`,
          }}/>
        </div>

        <div className={"flex-row"}>
          <div className={`text_area_wrap ${modules != null ? "wid75" : ""}`}>
            <textarea
              className={"nyim_textarea"}
              value={nyim_contents}
              style={{
                fontFamily: "Iosevka Web",
                fontSize: "medium",
                fontWeight: 'normal'
              }}
              onChange={(e) => setNyim_contents(e.target.value)}
            />
          </div>
          {
            viewState.isModulesLoaded &&
              <div className={"half_width"}>
                  <div dangerouslySetInnerHTML={
                    {__html: functions.md_renderer(modules, nyim_contents)}
                  } className={"md_area"}/>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default NyimEditor;
