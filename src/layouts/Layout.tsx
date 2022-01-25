import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

const Layout = () => {

  return (
    <>
      <Header />
      <div className="MainPage">
        <Router>
          <MainPage path="/" />
          <MainPage path="/projects" />
          <MainPage path="/about" />
          <MainPage path="/backwash" />
          <MainPage path="/morenysh" />
          <MainPage path="/404" />
          <MainPage path="/su_sudo" />
          <MainPage default />
        </Router>
      </div>
    </>
  )
}

export default Layout
