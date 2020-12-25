import React, { useState } from 'react'
import { graphql, StaticQuery } from "gatsby"
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import '@/styles/component/MPPost.scss'

export default function MPPost(props) {

    const [body, useBody]  = useState("");

    //md into html
    function Viewer(props) {

        for(let i : number = 0; i < props.data.allMicrocmsPotaruCms.totalCount; i++)
        {
            if (props.page == props.data.allMicrocmsPotaruCms.nodes[i].title){
                useBody(props.data.allMicrocmsPotaruCms.nodes[i].contents)
            }
        }
        
        const $ = cheerio.load(body);
        $('pre code').each((_, elm) => {
            const result = hljs.highlightAuto($(elm).text());

            $(elm).html(result.value);
            $(elm).addClass('hljs');
        });
        return (
            <pre>
                <div dangerouslySetInnerHTML={{ __html: $.html() }} />
            </pre>
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
                <Viewer data={data} page={props.page} />
            )}
        />
    )
}