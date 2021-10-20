import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"
// const RotateJumang = React.lazy(() =>
//   import("@/components/RotateJumang")
// )

interface Props {
}

const Layout: React.FC<Props> = () => {

  // // states
  // const [is3dState, setIs3dState] = useState<boolean>(false)
  // const isSSR: any = typeof window === "undefined"

  // useEffect(() => {
  //   const _stored = localStorage.getItem("is3d")
  //   if (_stored == "true") {
  //     setIs3dState(true)
  //   }
  // }, [])

  return (
    <>
      <Header />
      <div className="MainPage">
        {/* {!isSSR && is3dState &&
          <React.Suspense fallback={<div />}>
            <RotateJumang />
          </React.Suspense>
        } */}
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
