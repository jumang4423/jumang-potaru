import React from "react"

import Layout from "@/layouts/Layout"
import SEO from "@/layouts/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>or wrong link u just entered.</p>
  </Layout>
)

export default NotFoundPage
