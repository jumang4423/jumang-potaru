import React from "react"
import RotateJumang from "@/components/RotateJumang";

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

      }}><img src={"/me.png"} width={"50%"}/></div>

      <div style={{
        fontSize: `17px`,
        margin: "4px 0",
      }}>
        jumango | ryoma okuda
      </div>

      <div style={{
        fontSize: `17px`,
        margin: "12px 0",
        color: `#5e6c3d`,
      }}>
        {'->'} musician | frontend & backend developer
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
        ##### released songs
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
          }}>- (me)</a>
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
          }}>- (finally)</a>
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
          }}>- (trip)</a>
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
          }}>- (blanket)</a>
      </div>


      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        ##### computer skills
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - languages: (lisp, rust, go, lua and any other)
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - frameworks: (react, graphql, express)
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - tools: (git, nix, gcp)
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        - environment: (macbook pro 14 with nixos vm, thinkpad x200 with arch linux)
      </div>

      <div style={{
        fontSize: `16px`,
        margin: "24px 0",
      }}>
        ##### hobby projects
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/nylisp"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- nylisp</a> - a emoji based lisp interpreter, written in rust and webassembly ready
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/nylings"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- nylings</a> - learn nylisp expressions fixing unfinished source codes
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/nylang"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- nylang</a> - a initial emoji language interpreter, written in rust and webassembly ready
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/jumang-potaru"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- jumang-potaru.dev</a> - this portfolio site
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/rust_path_tracer"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- rust_path_tracer</a> - a path tracer written in rust
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/jobgosh"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- jobgosh</a> - job management tool made with golang
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/nysh"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- nyu shell</a> - a cute shell thingy that written in rust and webassembly ready
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/rustic-ts"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- rustic-ts</a> - a collection of rust like utilities like Result, Option, and some types for typescript
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/tiny-md-parser"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- tiny-md-parser</a> - a tiny markdown parser
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/anatato_pingpong"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- anatato_pingpong</a> - 友達がピンポンのおもちゃをたくさん持っていて、一緒に成らせたらいいなと思って作った
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/universe-jumang"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- universe-jumang</a> - a blog about jumango
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/jungle98"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- jungle98</a> - a sequencer which a school project written in python3
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/hentai_dream_95"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- hentai_dream_95</a> - secret folders generator to hide hentais in your computer
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/nsd"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- nsd </a> - rust simple ls
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0",
      }}>
        <a
          href={"https://github.com/jumang4423/gpshr"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- gpshr </a> - y not adding ugly sounds when u git push or commit
      </div>

      <div style={{
        fontSize: `14px`,
        margin: "12px 0 128px",
      }}>
        <a
          href={"https://github.com/jumang4423/power_tone"}
          target={"_blank"}
          style={{
            textDecoration: `none`,
            color: `#67939e`,
          }}>- power_tone </a> - digital audio workstation written in HSP
      </div>


    </div>
  )
}

export default MeText
