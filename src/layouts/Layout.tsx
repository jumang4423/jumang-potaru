import React, {useCallback, useEffect, useState} from "react"
import {Router, useLocation} from "@reach/router"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"
import "@/styles/component/HeaderFoot.scss";
import {Link} from "gatsby";

const RandomEmoji = () => {
  const genRandomEmoji = (): string => {
    const emojis = [
      "🐶",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🍙",
      "🌸",
      "🌷",
      "🌹",
      "🌻",
      "🌼",
      "🌷",
      "🌸",
      "🌺",
      "🌻",
      "🌹",
      "🌷",
      "🌸",
      "🌺",
      "🎶",
      "🎵",
      "🎶",
      "🎵",
      "🎶",
      "🎵",
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  const [emoji, setEmoji] = useState(genRandomEmoji())
  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(genRandomEmoji())
    }, 365)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className={"rotate"} style={{
      marginRight: `16px`,
      transform: 'scale(0.8)',
    }}>
      <div className={"centering"}>{emoji}</div>
    </div>
  )
}

const Layout = () => {
  const links = [{
    to: "/",
    label: "me",
  }, {
    to: "/nysh",
    label: "nyu shell",
  },{
    to: "/contacts",
    label: "contacts",
  }, {
    to: "/mind",
    label: "mind",
  }, {
    to: "https://universe-jumang.web.app/",
    label: "blog",
  },]

  return (
    <div style={{
      textRendering: "geometricPrecision",
      marginBottom: `128px`,
    }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          height: "42px",
          backgroundColor: `#fff`,
          display: `flex`,
          alignItems: `center`,
        }}>

        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
              <Link to={"/"} style={{
                textDecoration: 'none',
              }}><div className="flex-row" style={{
                fontSize: `16px`,
                color: `#5e6c3d`,
                fontWeight: `normal`,
                fontFamily: `Iosevka Web, monospace`,
                paddingRight: `12px`,
                cursor: `pointer`,
              }}>

                <RandomEmoji/>
                {"jumang-potaru.dev | "}
              </div></Link>
            {
              links.map((obj, key) => {
                return (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                    <Link
                      to={obj.to}
                      key={obj.to}
                      style={{
                        color: '#555',
                        textDecoration: 'underline',
                        marginRight: `8px`,
                        fontSize: `16px`,
                        fontWeight: `normal`,
                        // use menlo
                        fontFamily: `Iosevka Web, monospace`,
                        cursor: `pointer`,
                      }}>
                      {obj.label}
                    </Link>
                    <div hidden={key === links.length - 1} style={{
                      marginLeft: `4px`,
                      marginRight: `8px`,
                      fontSize: `16px`,
                      fontFamily: `Iosevka Web, monospace`
                    }}>-
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="MainPage">
        <Router>
          <MainPage path="/nysh"/>
          <MainPage path="/resume"/>
          <MainPage default/>
        </Router>
      </div>
    </div>
  )
}

export default Layout
