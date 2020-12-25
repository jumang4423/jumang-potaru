import React from 'react'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import '@/styles/component/MPPost.scss'

//md into html
const Viewer = (props) => {
    let body: string = ""
    for (let i: number = 0; i < props.data.allMicrocmsPotaruCms.totalCount; i++) {
        if (props.page == props.data.allMicrocmsPotaruCms.nodes[i].title) {
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
        <pre>
            <div dangerouslySetInnerHTML={{ __html: $.html() }} />
        </pre>
    )
}

export default Viewer