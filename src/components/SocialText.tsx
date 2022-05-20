import React from "react"

const SocialText = (): JSX.Element => {
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
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,

      }}><img src={"/dogi.png"} width={"50%"}/></div>


      <div style={{
        fontSize: `17px`,
        margin: "4px 0",
      }}>
        contacts
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
        ##### discord
      </div>


      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        jumango #9376
      </div>

      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        ##### social media
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://soundcloud.com/jumang4423"}

          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- soundcloud</a>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://www.twitter.com/jumang4423"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- twitter</a>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- github</a>
      </div>


    </div>
  )
}

export default SocialText
