import React from "react"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"

import DrawerMenu from "./components/DrawerMenu"
import Header from "./components/Header"
import Footer from "./components/Footer"

import './AppLayout.css'

const AppLayout: React.FC = () => {
  const { Content } = Layout

  return (
    <div style={{ height: "100%" }}>
      <main className="mainLayout">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </ main>
      <DrawerMenu />

      <Header />

      <div className="container" style={{ display: "flex", flexDirection: "column" }}>

        <Content style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 15px"
        }}>
          <Outlet />
        </Content>

        <Footer />
      </div>
    </div>
  )
};

export default AppLayout