import React from "react"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

const Layout: React.FC<any> = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default Layout
