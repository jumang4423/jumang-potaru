import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import cheerio from 'cheerio'
import hljs from 'highlight.js'
// import '@/styles/component/MPPost.scss'

export default function MPPost() {

    //get page from useLocation
    const path: string = useLocation().pathname
    let PageName: string = ""
    if (path === "/") PageName = "MainPage"
    else if (path === "/projects") PageName = "Projects"
    else if (path === "/about") PageName = "About"
    else if (path === "/backwash") PageName = "Backwash"
    else PageName = "404"
    //md into html
    const Viewer: React.FC<any> = (props) => {

        let body: string = ""

        for (let i: number = 0; i < props.data.allMicrocmsPotaruCms.totalCount; i++) {
            if (PageName === props.data.allMicrocmsPotaruCms.nodes[i].title) {
                body = props.data.allMicrocmsPotaruCms.nodes[i].contents
            }
        }

        const $ = cheerio.load(body);
        $('pre code').each((_, elm) => {
            const result = hljs.highlightAuto($(elm).text());

            $(elm).html(result.value);
            $(elm).addClass('hljs');
        });

        return (
            <div className="MPPost" dangerouslySetInnerHTML={{ __html: $.html() }} />
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
                <Viewer data={data} />
            )}
        />
    )
}