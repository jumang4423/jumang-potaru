import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import Header from "@/components/Header"
import MainPage from "@/layouts/MainPage"
import "@/styles/layout/Layout.scss"
const RotateJumang = React.lazy(() =>
  import("@/components/RotateJumang")
)

interface Props {
}

const Layout: React.FC<Props> = () => {

  // states
  const [is3dState, setIs3dState] = useState<boolean>(false)
  const isSSR: any = typeof window === "undefined"
  const [isRotateJumang, setIsRotateJumang] = useState<Boolean>(false)

  useEffect(() => {
    setTimeout(() => { setIsRotateJumang(true) }, 500);
    const _stored = localStorage.getItem("is3d")

    if (_stored == "true") {
      setIs3dState(true)
    }
  }, []);

  return (
    <>
      <Header />
      <div className="MainPage">
        {!isSSR && isRotateJumang &&
          <React.Suspense fallback={<div />}>
            {is3dState && <RotateJumang />}
          </React.Suspense>
        }
        <Router>
          <MainPage path="/" />
          <MainPage path="/projects" />
          <MainPage path="/about" />
          <MainPage path="/backwash" />
          <MainPage path="/morenysh" />
          <MainPage path="/404" />
          <MainPage default />
        </Router>
      </div>
    </>
  )
}

export default Layout
