import React from "react"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

type Props = { page: string, height: number }

const Layout: React.FC<Props> = ({ page, height }) => {
  return (
    <>

      <MainPage
        page={page}
        height={height} />
      <Header />
    </>
  )
}

export default Layout
