import React, {useEffect, useState} from "react"
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
    label: "nysh",
  }, {
    to: "/me",
    label: "me",
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

  const cur_title = () => {
    const path = useLocation().pathname;
    switch (path) {
      case "/":
        return "jumang-potaru.dev";
      case "/me":
        return "about me, jumango";
      case "/resume":
        return "resume";
      case "/contacts":
        return "contacts information";
      case "/mind":
        return "jumango mind";
      default:
        return "??";
    }
  }

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
                fontSize: `15px`,
                color: `#5e6c3d`,
                fontWeight: `normal`,
                fontFamily: `Menlo, monospace`,
                paddingRight: `12px`,
                cursor: `pointer`,
              }}>

                <RandomEmoji/>
                {cur_title() + " | "}
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
                        fontSize: `15px`,
                        fontWeight: `normal`,
                        // use menlo
                        fontFamily: `Menlo, monospace`,
                        cursor: `pointer`,
                      }}>
                      {obj.label}
                    </Link>
                    <div hidden={key === links.length - 1} style={{
                      marginLeft: `4px`,
                      marginRight: `8px`,
                      fontSize: `14px`,
                      fontFamily: `Menlo, monospace`
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
          <MainPage path="/me"/>
          <MainPage path="/resume"/>
          <MainPage default/>
        </Router>
      </div>
    </div>
  )
}

export default Layout
