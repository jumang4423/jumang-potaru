import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import Viewer from "@/components/Viewer"
import 'highlight.js/styles/hybrid.css'
import '@/styles/component/MPPost.scss'

export default function MPPost(props) {

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
                <Viewer
                data={data}
                page={props.page}/>
            )}
        />
    )
}