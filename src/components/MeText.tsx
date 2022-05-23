import React from "react"
import RotateJumang from "@/components/RotateJumang";
import TextBuwa from "@/components/TextBuwa";

const MeText = (): JSX.Element => {
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

      }}><img src={"/me.png"} width={"50%"} style={{
        filter: `saturate(0.75)`,
      }}/></div>

      <div style={{
        fontSize: `17px`,
        margin: "4px 0",
      }}>
        <div style={{
          backgroundImage: `linear-gradient(90deg, rgba(114,156,90,0.5) 0%, rgba(171,171,171,1) 100%)`,
          width: `284px`,
          color: `#fff`,
        }}>
          <TextBuwa text={"jumango | ryoma okuda"}/>
        </div>

      </div>

      <div style={{
        fontSize: `17px`,
        margin: "12px 0",
        color: `#5e6c3d`,
      }}>
        <TextBuwa text={"-> musician | frontend & backend developer"}/>
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
        <TextBuwa text={"##### released songs"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://soundcloud.com/jumang4423/me-by-jumango"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>
          <TextBuwa text={"- (me)"}/>
        </a>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://soundcloud.com/jumang4423/finally"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- (finally)"}/></a>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://soundcloud.com/jumang4423/trip"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- (trip)"}/></a>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://soundcloud.com/jumang4423/blanket"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- (blanket)"}/></a>
      </div>


      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        <TextBuwa text={"##### computer skills"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- languages: (lisp, rust, go, lua and any other)"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- frameworks: (react, graphql, express)"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- tools: (git, nix, gcp)"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <TextBuwa text={"- environment: (macbook pro 14 with nixos vm, thinkpad x200 with arch linux)"}/>
      </div>

      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        <TextBuwa text={"##### hobby projects"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/nylisp"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- nylisp"}/></a> <TextBuwa text={" - a emoji based lisp interpreter, written in rust and webassembly ready"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/nylings"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- nylings"}/></a><TextBuwa text={" - learn nylisp expressions fixing unfinished source codes"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/nylang"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- nylang"}/></a><TextBuwa text={" - a initial emoji language interpreter, written in rust and webassembly ready"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/jumang-potaru"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- jumang-potaru.dev"}/></a><TextBuwa text={" - this portfolio site"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/rust_path_tracer"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- rust_path_tracer"}/></a><TextBuwa text={" - a path tracer written in rust"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/jobgosh"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- jobgosh"}/></a><TextBuwa text={" - job management tool made with golang"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/nysh"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- nyu shell"}/></a><TextBuwa text={" - a cute shell thingy that written in rust and webassembly ready"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/rustic-ts"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- rustic-ts"}/></a><TextBuwa text={" - a collection of rust like utilities like Result, Option, and some types for typescript"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/tiny-md-parser"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- tiny-md-parser"}/></a><TextBuwa text={" - a tiny markdown parser"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/anatato_pingpong"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- anatato_pingpong"}/></a><TextBuwa text={" - 友達がピンポンのおもちゃをたくさん持っていて、一緒に成らせたらいいなと思って作った"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/universe-jumang"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- universe-jumang"}/></a><TextBuwa text={" - a blog about jumango"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/jungle98"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- jungle98"}/></a><TextBuwa text={" - a sequencer which a school project written in python3"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/hentai_dream_95"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- hentai_dream_95"}/></a><TextBuwa text={" - secret folders generator to hide hentais in your computer"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/nsd"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- nsd"}/></a><TextBuwa text={" - rust simple ls"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/gpshr"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- gpshr"}/></a><TextBuwa text={" - y not adding ugly sounds when u git push or commit"}/>
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0 128px",
        flexDirection: `row`,
        display: `flex`,
      }}>
        <a
          href={"https://github.com/jumang4423/power_tone"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}><TextBuwa text={"- power_tone"}/></a><TextBuwa text={" - digital audio workstation written in HSP"}/>
      </div>


    </div>
  )
}

export default MeText
