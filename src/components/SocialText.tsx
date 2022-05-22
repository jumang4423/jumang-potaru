import React, {useEffect} from "react"

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
      fontFamily: `Menlo, monospace`,
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
        fontSize: `17px`,
        margin: "4px 0",
      }}>
        <div style={{
          backgroundImage: `linear-gradient(90deg, rgba(114,156,90,0.5) 0%, rgba(171,171,171,1) 100%)`,
          width: `154px`,
          color: `#fff`,
        }}>contacts</div>
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