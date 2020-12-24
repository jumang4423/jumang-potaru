import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import '@/styles/component/MPPost.scss'

export default function MPPost() {

    function Viewer(props) {
        const body = props.data.allMicrocmsPotaruCms.nodes[0].contents
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
            }
        }`}
            render={(data) => (
                <Viewer data={data} />
            )}
        />
    )
}