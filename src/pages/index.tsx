import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Layout from "@/layouts/Layout"
import SEO from "@/layouts/seo"
import MainPage from "@/layouts/MainPage"
//import Image from "../components/image"gats

export default () => (
    <Layout>
      <SEO title="jumang potaru"/>
      <MainPage />
    </Layout>
);




