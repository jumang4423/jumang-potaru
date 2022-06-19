import React from "react"
import RotateJumang from "@/components/RotateJumang";
import TextBuwa from "@/components/TextBuwa";

const MindText = (): JSX.Element => {
  return (
    <div style={{
      width: "100%",
      maxWidth: "960px",
      backgroundColor: '#fff',
      margin: "0px 8px 0 8px",
      fontWeight: `normal`,
      fontFamily: `"Iosevka Web", monospace`,
      color: `#555`,
    }}>

      <div style={{
        zIndex: -1,
      }}>
        <RotateJumang/>
      </div>



      <div style={{
        fontSize: `18px`,
        margin: "0px 0"
      }}>
        <div style={{
          backgroundImage: `linear-gradient(90deg, rgba(114,156,90,0.5) 0%, rgba(171,171,171,1) 100%)`,
          width: `110px`,
          color: `#fff`,
        }}><TextBuwa text={"mind"}/></div>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
        fontWeight: `bold`,
      }}>
        ==
      </div>

      <div style={{
        fontSize: `18px`,
        margin: "24px 0",
      }}>
        <TextBuwa text={"##### i believe"}/>
      </div>


      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- we are our own god in mind"}/>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- we dont need to work hard to talk to someone u dont like or trust, it is also a love not a hate"}/>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- if you love flowers, i love you"}/>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- i always find someone really similar to me, and i know u do too"}/>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- sometimes we need take a break that we all know, and you need to accept that"}/>
      </div>
    </div>
  )
}

export default MindText
