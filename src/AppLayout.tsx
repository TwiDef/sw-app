import React from "react"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"

import DrawerMenu from "./components/DrawerMenu"
import Header from "./components/Header"
import Footer from "./components/Footer"

import './AppLayout.css'

const AppLayout: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const { Content } = Layout

  return (
    <div style={{ height: "100%" }}>
      <div className="mainLayout">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </ div>
      <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <Header setIsOpen={setIsOpen} />

      <div className="container" style={{ display: "flex", flexDirection: "column" }}>

        <Content style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}>
          <Outlet />
        </Content>

        <Footer />
      </div>
    </div>
  )
}

export default AppLayout