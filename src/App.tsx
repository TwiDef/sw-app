import React from "react"
import { Layout } from "antd"
import DrawerMenu from "./components/DrawerMenu"
import Header from "./components/Header"
import Footer from "./components/Footer"

import './App.css'

const App: React.FC = () => {
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

        <Content >
          <div style={{ color: "#fff", fontSize: "30px" }}>CONTENT</div>
        </Content>

        <Footer />
      </div>
    </div>
  )
};

export default App