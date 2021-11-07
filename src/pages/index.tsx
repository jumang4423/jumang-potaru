import React, { useEffect, useState } from 'react';
import Layout from "@/layouts/Layout"
import SEO from "@/layouts/seo"
import {useTheme, Theme} from '@material-ui/core';


export default () => {
    const theme: Theme = useTheme()

    return (
        <>

            <Layout />
            <SEO title="jumang potaru" />
        </>
    )
}