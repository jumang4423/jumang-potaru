import React from "react";
import "../styles/component/nyimEditor.scss"

type Props = {
  nyim_contents: string
  setNyim_contents: Function
  nyim_fileName: string
  closeNyim: Function
  save_nyim: Function
}

const NyimEditor = ({
  nyim_contents,
  setNyim_contents,
  nyim_fileName,
  closeNyim,
  save_nyim
}
  : Props) => {
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

        <textarea
          className={"nyim_textarea"}
          value={nyim_contents}
          onChange={(e) => setNyim_contents(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NyimEditor;
