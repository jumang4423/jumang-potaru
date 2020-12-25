import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Layout from "@/layouts/Layout"
import SEO from "@/layouts/seo"
import MainPage from "@/layouts/MainPage"
//import Image from "../components/image"gats

export default () => (
  <Router>
    <Layout>
      <SEO title="jumang potaru" />
      <Route
        exact path="/"
        render={() => (
          <MainPage
            page="MainPage"
            pageName="introduction"
            height={960} />
        )}></Route>

      <Route
        exact path="/projects"
        render={() => (
          <MainPage
            page="Projects"
            pageName="projects"
            height={860} />
        )}></Route>

      <Route
        exact path="/about"
        render={() => (
          <MainPage
            page="About"
            pageName="about"
            height={760} />
        )}></Route>

      <Route
        exact path="/library"
        render={() => (
          <MainPage
            page="Library"
            pageName="library"
            height={500} />
        )}></Route>
    </Layout>
  </Router>
);




