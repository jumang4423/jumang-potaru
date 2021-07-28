import React, { useState } from 'react'
import { graphql, StaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import SpecialButton from './SpecialButton'

export default function MPPost() {

    //get page from useLocation
    const path: string = useLocation().pathname
    let PageName: string = ""
    switch (path) {
        case "/":
            PageName = "MainPage"
            break
        case "/projects":
            PageName = "Projects"
            break
        case "/about":
            PageName = "About"
            break
        case "/backwash":
            PageName = "Backwash"
            break
        default:
            PageName = "404"
            break
    }


    //md into html
    const Viewer: React.FC<any> = (props) => {
        let body: string = ""
        for (let i: number = 0; i < props.data.allMicrocmsPotaruCms.totalCount; i++) {
            if (PageName === props.data.allMicrocmsPotaruCms.nodes[i].title) {
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
    }

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
                </div>
            )}
        />
    )
}