import React from "react"
import RotateJumang from "@/components/RotateJumang";

const MindText = (): JSX.Element => {
  return (
    <div style={{
      width: "100%",
      maxWidth: "960px",
      backgroundColor: '#fff',
      margin: "0px 8px 0 8px",
      fontWeight: `normal`,
      // use menlo
      fontFamily: `Menlo, monospace`,
      color: `#555`,
    }}>

      <div style={{
        zIndex: -1,
      }}>
        <RotateJumang/>
      </div>



      <div style={{
        fontSize: `17px`,
        margin: "0px 0",
      }}>
        mind
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        fontWeight: `bold`,
      }}>
        ==
      </div>

      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        ##### i believe
      </div>


      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - we are our own god in mind
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - we dont need to work hard to talk to someone u dont like or trust, it is also a love not a hate
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - if you love flowers, i love you
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - i always find someone really similar to me, and i know u do too
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - sometimes we need take a break that we all know, and you need to accept that
      </div>
    </div>
  )
}

export default MindText
