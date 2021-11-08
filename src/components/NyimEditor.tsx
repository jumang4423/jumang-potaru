import React, { useState, useEffect } from "react";
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

const NyimEditor = ({
  nyim_contents,
  setNyim_contents,
  nyim_fileName,
  closeNyim,
  save_nyim
}
  : Props) => {

  const [modules, setModules] = useState<any>(null)
  const [renderer, set_renderer] = useState<string>("")

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
          <h1 className={"flex_col"}>
            <div>nyvim {"<-"}</div>
            <div className={"text_green"}>{nyim_fileName}</div>
          </h1>
        </div>

        <div className={"place_left"}>
          <button className={"cutie_button"}
            onClick={() => {
              save_nyim()
              closeNyim()
            }}>
            save
          </button>
        </div>

        <div className={"nyim_hr_wrapper"}>
          <div className={"nyim_hr_is_green"} />
        </div>

        <div className={"flex-row"}>
          <div className={"text_area_wrap"}>
            <textarea
              className={"nyim_textarea"}
              value={nyim_contents}
              onChange={(e) => setNyim_contents(e.target.value)}
            />
          </div>
          {
            modules != null &&
            <div className={"half_width"}>
              <div dangerouslySetInnerHTML={
                { __html: functions.md_renderer(modules, nyim_contents) }
              } className={"md_area"} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default NyimEditor;
