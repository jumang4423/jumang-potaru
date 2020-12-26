import React from "react"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

type Props = { page: string }

const Layout: React.FC<Props> = ({ page }) => {
  return (
    <>
      <Header />
      <MainPage page={page} />
    </>
  )
}

export default Layout
