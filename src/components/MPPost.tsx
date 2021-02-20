import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { useLocation } from "@reach/router"
import cheerio from 'cheerio'
import hljs from 'highlight.js'
// import '@/styles/component/MPPost.scss'

export default function MPPost() {

    //get page from useLocation
    const path = useLocation().pathname
    let PageName = ""
    if(path==="/") PageName="MainPage"
    else if(path==="/projects") PageName="Projects"
    else if(path==="/about") PageName="About"
    else if(path==="/library") PageName="Library"
    else PageName="404"

    console.log(path)
    //md into html
    const Viewer = (props) => {
        let body: string = ""
        for (let i: number = 0; i < props.data.allMicrocmsPotaruCms.totalCount; i++) {
            if (PageName === props.data.allMicrocmsPotaruCms.nodes[i].title) {
                body = props.data.allMicrocmsPotaruCms.nodes[i].contents
                console.log(props.data.allMicrocmsPotaruCms.nodes[i].contents)
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