import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"

const RotateJumang = React.lazy(() =>
  import("@/components/RotateJumang")
)

const Layout: React.FC<any> = () => {
  const isSSR = typeof window === "undefined"

  const [isRotateJumang, setIsRotateJumang] = useState<Boolean>(false)
  useEffect(() => {
    setTimeout(() => { setIsRotateJumang(true) }, 500);
  }, []);

  return (
    <>
      <Header />
      <div className="MainPage">
        {!isSSR && isRotateJumang &&
          <React.Suspense fallback={<div />}>
             <RotateJumang />
          </React.Suspense>
        }
        <Router>
          <MainPage path="/" />
          <MainPage path="/projects" />
          <MainPage path="/about" />
          <MainPage path="/library" />
          <MainPage path="/404" />
          <MainPage default />
        </Router>
      </div>
    </>
  )
}

export default Layout
