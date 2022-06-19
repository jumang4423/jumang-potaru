import React, {useEffect} from "react"
import TextBuwa from "@/components/TextBuwa";

const SocialText = (): JSX.Element => {

  const [saturationState, setSaturationState] = React.useState(0.75)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextState = function(curState) {
        if (curState < 12) {
          return curState + 0.05
        } else {
          return 0
        }
      }
      setSaturationState(saturationState => nextState(saturationState))
    }, 1000/30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      width: "100%",
      maxWidth: "960px",
      backgroundColor: '#fff',
      margin: "0px 8px 0 8px",
      fontWeight: `normal`,
      // use menlo
      fontFamily: `"Iosevka Web", monospace`,
      color: `#555`,
    }}>

      <div style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,

      }}><img src={"/dogi.png"} width={"50%"} style={{
        filter: `saturate(${saturationState})`,
      }}/></div>


      <div style={{
        fontSize: `18px`,
        margin: "4px 0",
      }}>
        <div style={{
          backgroundImage: `linear-gradient(90deg, rgba(114,156,90,0.5) 0%, rgba(171,171,171,1) 100%)`,
          width: `154px`,
          color: `#fff`,
        }}><TextBuwa text={"contacts"}/></div>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
        fontWeight: `bold`,
      }}>
        ==
      </div>

      <div style={{
        fontSize: `17px`,
        margin: "24px 0",
      }}>
        <TextBuwa text={"##### discord"}/>
      </div>


      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"jumango #9376"}/>
      </div>

      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        <TextBuwa text={"##### social media"}/>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://soundcloud.com/jumang4423"}

          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>
          <TextBuwa text={"- soundcloud"}/>
        </a>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://www.twitter.com/jumang4423"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>
          <TextBuwa text={"- twitter"}/>
        </a>
      </div>

      <div style={{
        fontSize: `15px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>
          <TextBuwa text={"- github"}/>
        </a>
      </div>


    </div>
  )
}

export default SocialText
