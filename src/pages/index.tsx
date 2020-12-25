import React from 'react';
import { Router } from "@reach/router"
import Layout from "@/layouts/Layout"
import SEO from "@/layouts/seo"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
//import Image from "../components/image"gats

export default function () {
  return (
    <Layout>
      <SEO title="jumang potaru" />
      <Router>
        <MainPage
          path="/"
          page="MainPage"
          pageName="introduction"
          height={960} />

        <MainPage
          path="/projects"
          page="Projects"
          pageName="projects"
          height={860} />

        <MainPage
          path="/about"
          page="About"
          pageName="about"
          height={750} />

        <MainPage
          path="/library"
          page="Library"
          pageName="library"
          height={740} />
      </Router>
      <Header />
    </Layout>
  )
}