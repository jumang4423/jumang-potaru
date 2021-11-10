import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import CutieButton from './CutieButton'

export default function MPPost(props) {

    //get page from useLocation

    const path: string = useLocation().pathname

    let pageName: string = ((): string => {
        switch (path) {
            case "/":
                return "MainPage"
            case "/projects":
                return "Projects"
            case "/about":
                return "About"
            case "/backwash":
                return "Backwash"
            case "/morenysh":
                return "MoreNysh"
            default:
                return "404"
        }
    })()


    //md into html
    const Viewer = React.memo((props: any) => {
        let body: string = ""
        for (let i: number = 0; i < props.data.allMicrocmsPotaruCms.totalCount; i++) {
            if (pageName === props.data.allMicrocmsPotaruCms.nodes[i].title) {
                body = props.data.allMicrocmsPotaruCms.nodes[i].contents
            }
        }

        const $ = cheerio.load(body)
        $('pre code').each((_, elm) => {
            const result = hljs.highlightAuto($(elm).text())

            $(elm).html(result.value)
            $(elm).addClass('hljs')
        })

        return (
            <div dangerouslySetInnerHTML={{ __html: $.html() }} />
        )
      });

    return (
        <StaticQuery
            query={
                graphql`
        query MyQuery {
            allMicrocmsPotaruCms {
                nodes {
                    title
                    contents
                }
                totalCount
            }
        }`}
            render={(data) => (
                <div className="MPPost">
                    <Viewer data={data} />
                    {path === "/" &&
                        <div className={"cute_flex goLeft"}>
                            <div onClick={() => {
                                props.setIsNysh(true)
                            }}>
                                <CutieButton Name={"back to nysh"} />
                            </div>
                        </div>
                    }
                </div>
            )}
        />
    )
}